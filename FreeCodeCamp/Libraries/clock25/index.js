// Pressets:
const init = {
  timerTitle: "Session",
  breakLength: 5,
  sessionLength: 25,
  startLength: 1500,
  start: "stop",
  interval: 1000,
  alarmStyle: "alarm",
  play: false,
};
// -----------------------------------------------------
// Helpers:
function getFormated(num, clockify = false) {
  if (clockify) {
    let minutes = Math.trunc(num / 60);
    let seconds = num % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${minutes}:${seconds}`;
  }
  return num;
}
// -----------------------------------------------------
// Components:
function Controller({
  titleID = "",
  displayID = "",
  addBtnID = "",
  reduceBtnID = "",
  controllerClassName = "",
  titleClassName = "",
  btnsContainerClassName = "",
  displayClassName = "",
  flexContainerClassName = "",
  addBtnClassName = "",
  reduceBtnClassName = "",
  title = "",
  dataToShow = "TEST",
  addBtnHandler = () => console.log("ADD"),
  reduceBtnHandler = () => console.log("REDUCE"),
  customAddBtnIcon = null,
  customReduceBtnIcon = null,
  disabled = false,
}) {
  return (
    <div className={`controller ${controllerClassName}`}>
      <h3 id={titleID} className={`controller__title ${titleClassName}`}>
        {title}
      </h3>
      <div className={`controller__flex-container ${flexContainerClassName}`}>
        <div
          id={displayID}
          className={`controller__display ${displayClassName}`}
        >
          {dataToShow}
        </div>
        <div className={`controller__btns-container ${btnsContainerClassName}`}>
          <button
            id={addBtnID}
            onClick={addBtnHandler}
            className={`btn controller__add-btn ${addBtnClassName}`}
            disabled={disabled}
          >
            {customAddBtnIcon ?? <i className="bi bi-caret-up-fill"></i>}
          </button>
          <button
            id={reduceBtnID}
            onClick={reduceBtnHandler}
            className={`btn controller__reduce-btn ${reduceBtnClassName}`}
            disabled={disabled}
          >
            {customReduceBtnIcon ?? <i className="bi bi-caret-down-fill"></i>}
          </button>
        </div>
      </div>
    </div>
  );
}

function Timer() {
  // -----------------------------------------------------
  const useState = React.useState;
  const useEffect = React.useEffect;
  const useRef = React.useRef;
  // ----------------------------------------------------
  const beep = useRef();
  const alarmStyle = init.alarmStyle;
  const [breakLength, setBreakLength] = useState(init.breakLength);
  const [sessionLength, setSessionLength] = useState(init.sessionLength);
  const [time, setTime] = useState(init.startLength);
  const [timerTitle, setTimerTitle] = useState(init.timerTitle);
  const [play, setPlay] = useState(init.play);
  // -----------------------------------------------------
  const timerID = setTimeout(() => {
    if (time && play) {
      setTime(time - 1);
    }
  }, 1000);
  // -----------------------------------------------------
  function addBreakLength() {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }

  function reduceBreakLength() {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  }

  function addSessionLength() {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTime(time + 60);
    }
  }

  function reduceSessionLength() {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTime(time - 60);
    }
  }

  function resetTimer() {
    clearTimeout(timerID);
    setPlay(init.play);
    setTime(init.startLength);
    setBreakLength(init.breakLength);
    setSessionLength(init.sessionLength);
    setTimerTitle(init.timerTitle);
    beep.current.pause();
    beep.current.currentTime = 0;
  }

  function playTimer() {
    clearTimeout(timerID);
    setPlay(!play);
  }
  // -----------------------------------------------------
  function switchTimer() {
    if (timerTitle === "Session") {
      setTime(breakLength * 60);
      setTimerTitle("Break");
      beep.current.play();
    }
    if (timerTitle === "Break") {
      setTime(sessionLength * 60);
      setTimerTitle("Session");
      beep.current.pause();
      beep.current.currentTime = 0;
    }
  }
  // -----------------------------------------------------
  useEffect(() => {
    if (time === 0) {
      switchTimer();
    }
  }, [time]);

  useEffect(() => {
    if (play === true) {
      timerID;
    } else {
      clearTimeout(timerID);
    }
  }, [play]);
  // -----------------------------------------------------
  return (
    <div className="timer">
      <Controller
        controllerClassName="break-controller"
        titleID="break-label"
        displayID="break-length"
        addBtnID="break-increment"
        reduceBtnID="break-decrement"
        title="Break Length"
        dataToShow={getFormated(breakLength)}
        addBtnHandler={addBreakLength}
        reduceBtnHandler={reduceBreakLength}
        disabled={play}
      />
      <Controller
        displayClassName={time <= 60 ? alarmStyle : ""}
        controllerClassName="timer-controller"
        titleID="timer-label"
        displayID="time-left"
        addBtnID="start_stop"
        reduceBtnID="reset"
        title={timerTitle}
        customAddBtnIcon={play ? <i class="bi bi-pause-circle"></i> : <i className="bi bi-play-fill"></i>}
        customReduceBtnIcon={<i className="bi bi-arrow-clockwise"></i>}
        addBtnHandler={playTimer}
        reduceBtnHandler={resetTimer}
        flexContainerClassName="session__flex-container"
        btnsContainerClassName="session__btns-container"
        dataToShow={getFormated(time, true)}
      />
      <Controller
        controllerClassName="session-controller"
        titleID="session-label"
        displayID="session-length"
        addBtnID="session-increment"
        reduceBtnID="session-decrement"
        title="Session Length"
        dataToShow={getFormated(sessionLength)}
        addBtnHandler={addSessionLength}
        reduceBtnHandler={reduceSessionLength}
        disabled={play}
      />
      <audio
        id="beep"
        preload="auto"
        ref={beep}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

ReactDOM.render(<Timer />, document.getElementById("root"));
