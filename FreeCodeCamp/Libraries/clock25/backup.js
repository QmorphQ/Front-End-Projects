// Pressets:
const init = {
    timerTitle: "Session",
    breakLength: 5,
    sessionLength: 25,
    start: "stop",
    interval: 1000
  };
  
  // Functions:
  
  function getFormated(num, clockify = false) {
    if (clockify === true) {
      let minutes = Math.trunc(num / 60);
      let seconds = num % 60;
      minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      seconds = seconds < 10 || seconds === 0 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${seconds}`;
    }
    return num;
  }
  
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
            >
              {customAddBtnIcon ?? <i className="bi bi-caret-up-fill"></i>}
            </button>
            <button
              id={reduceBtnID}
              onClick={reduceBtnHandler}
              className={`btn controller__reduce-btn ${reduceBtnClassName}`}
            >
              {customReduceBtnIcon ?? <i className="bi bi-caret-down-fill"></i>}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // ================================================ TIMER =======================================================
  function Timer() {
    // ================================================ RENDER =======================================================
    const useState = React.useState;
    const useEffect = React.useEffect;
    const useRef = React.useRef;
    // -----------------------------------------------------
    const beep = useRef();
  
    const [timerTitle, setTimerTitle] = useState(init.timerTitle);
    const [breakLength, setBreakLength] = useState(init.breakLength);
    const [sessionLength, setSessionLength] = useState(init.sessionLength);
    const [timer, setTimer] = useState(init.sessionLength * 60);
    const [start, setStart] = useState(init.start);
    const [timerID, setTimerID] = useState(null);
    const [alarmStyle, setAlarmStyle] = useState("");
    // ------------------------------------------------------
    function countDownTimer(outerFunc, interval = init.interval) {
      function fn() {
          setTimerID(setTimeout(fn, interval))
          return outerFunc();
      }
      return fn()
    }
    // -----------------------------------------------------
    // ++++++
    // *Break:
    function addBreakLength() {
      if (breakLength < 60 && start !== "play") {
        return (setBreakLength((prev) => (prev += 1)), setStart("updated"))
      } else return
    }
  
    function reduceBreakLength() {
      if (breakLength > 1 && start !== "play") {
        return (setBreakLength((prev) => (prev -= 1)), setStart("updated"))
      }
    }
    // ++++++
    // *Session:
    function addSessionLength() {
      if (sessionLength < 60 && start !== "play") {
       return (setSessionLength((prev) => (prev += 1)), setStart("updated"))
      } else return
    }
  
    function reduceSessionLength() {
      if (sessionLength > 1 && start !== "play") {
       return setSessionLength((prev) => (prev -= 1)), setStart("updated")
      } else return
    }
    // ++++++
    // *Timer:
    function restartSession() {
      setTimerTitle(init.timerTitle);
      setBreakLength(init.breakLength);
      setSessionLength(init.sessionLength);
      setTimer(init.sessionLength * 60);
      setStart(init.start);
      clearTimeout(timerID);
      setTimerID(null);
    }
    // ++++++
    function toggleSession() {
      setStart((prev) => prev === "play" ? "stop" : "play");
    }
    // -----------------------------------------------------
    useEffect(() => {
      switch(start){
        case "play":
          return countDownTimer(() => setTimer(prev => prev - 1));
        case "stop":
          return (clearTimeout(timerID), setTimerID(null));
        case "updated":
          if (timerTitle === "Session"){
            return setTimer(sessionLength * 60)
          } else if(timerTitle === "Break"){
            return setTimer(breakLength * 60)
          }
      }
    }, [start, sessionLength, breakLength])
  
    useEffect(() => {
      if(timer <= 60){
       return setAlarmStyle("alarm")
      }
      return setAlarmStyle("")
    }, [timer])
  
    useEffect(() => {
      if(timer === 0){
        beep.current.play()
      }
    }, [timer])
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
          dataToShow={`${getFormated(breakLength)}`}
          addBtnHandler={addBreakLength}
          reduceBtnHandler={reduceBreakLength}
        />
        <Controller
          displayClassName={alarmStyle}
          controllerClassName="timer-controller"
          titleID="timer-label"
          displayID="time-left"
          addBtnID="start_stop"
          reduceBtnID="reset"
          title={timerTitle}
          customAddBtnIcon={<i className="bi bi-play-fill"></i>}
          customReduceBtnIcon={<i className="bi bi-arrow-clockwise"></i>}
          addBtnHandler={toggleSession}
          reduceBtnHandler={restartSession}
          flexContainerClassName="session__flex-container"
          btnsContainerClassName="session__btns-container"
          dataToShow={getFormated(timer, true)}
        />
        <Controller
          controllerClassName="session-controller"
          titleID="session-label"
          displayID="session-length"
          addBtnID="session-increment"
          reduceBtnID="session-decrement"
          title="Session Length"
          dataToShow={`${getFormated(sessionLength)}`}
          addBtnHandler={addSessionLength}
          reduceBtnHandler={reduceSessionLength}
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
  
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(<Timer />);
  