"use strict";
//=========================================================================
//-------------------------------------------------------------------------
//++++++
//+++
const pressets = {
    Title: {
        text: `25 + 5 Clock`,
    },
    Break: {
        title: `Break Length`,
    },
    Session: {
        title: `Session Length`,
    },
    Timer: {
        title: `Session`,
    },
    Controller: ``,
    Alarm: {src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}
};
const classNames = {
    App: `App user-select-none`,
    Title: `text-center pt-5`,
    Container: `main-container container d-flex flex-column justify-content-around align-items-stretch`,
    Break: ``,
    Session: ``,
    Timer: `align-self-center`,
    Controller: `d-flex fs-2 `,
};
//-------------------------------------------------------------------------
//================================================================ STATE ======================================================//
//State:
const initialState = {
    breakLength: 5,
    sessionLength: 25,
    workTimeToDisplay: `25:00`,//?=-=-=-=-=-=-=--=!!!
    breakTimeToDisplay: `05:00`,
    sessionStatus: "work",//?-=-=-=-=-=-=-=-=!!!
    timerStatus: "off",
    alarm: "off",
};
const timerDecrement = (str) => {
   let time = str.split(":");
   const [minutes, seconds] = time;
   if (minutes === "00" && seconds === "00") {
       return `00:00`
   };
   if (seconds <= 59 && seconds >= 11) {
       return `${minutes}:${+seconds - 1}`;
   };
   if (seconds <= 10 && seconds > 0){
       return `${minutes}:0${+seconds - 1}`;
   };
   if (seconds === "00"){
      if (minutes <= 60 && minutes >= 11) {
          return `${+minutes - 1}:59`;
      };
      if (minutes <= 10 && minutes >= 1){
          return `0${+minutes - 1}:59`;
      };
      if (minutes === "01") {
          return `01:00`
      }
   }
};
const changeTimer = (str, operator) => {
    const time = str.split(":");
    const [minutes, seconds] = time;
    if (operator === "+") {
       if (+minutes >= 0 && +minutes <= 8) {
           return `0${+minutes + 1}:${seconds}`
       } else if (+minutes >= 9 && +minutes < 59) {
           return `${+minutes + 1}:${seconds}`
       } else if (minutes === "60") {
           return `${minutes}:00`
       } 
    } else if (operator === "-") {
        if (minutes > 1 && minutes <= 10) {
            return `0${+minutes - 1}:${seconds}`
        } else if (minutes >= 11 && minutes <= 60) {
            return `${+minutes - 1}:${seconds}`
        } else if ( minutes === "01") {
            return `${minutes}:00`
        } else if (minutes === "00") {
            return str
        }
    }
};
const reducer = (state, action) => {
    switch (action.type){
        case "BREAK_DECREMENT":
            return state.timerStatus === "off" 
            ? {...state, breakLength: state.breakLength === 1 ? state.breakLength : state.breakLength - 1, breakTimeToDisplay: changeTimer(state.breakTimeToDisplay, "-")}
            : state;
        case "BREAK_INCREMENT":
            return state.timerStatus === "off" 
            ? {...state, breakLength: state.breakLength === 60 ? state.breakLength : state.breakLength + 1, breakTimeToDisplay: changeTimer(state.breakTimeToDisplay, "+")}
            : state;
        case "SESSION_DECREMENT":
            return state.timerStatus === "off" 
                   ? {...state, sessionLength: state.sessionLength === 1 ? state.sessionLength : state.sessionLength - 1, workTimeToDisplay: changeTimer(state.workTimeToDisplay, "-")}
                   : state;
        case "SESSION_INCREMENT":
            return state.timerStatus === "off" 
            ? {...state, sessionLength: state.sessionLength === 60 ? state.sessionLength : state.sessionLength + 1, workTimeToDisplay: changeTimer(state.workTimeToDisplay, "+")}
            : state;
        case "SHOW_TIME"://?-=-=-=-=-=-===-=-=-=-=-=-=-!!!
            return state.sessionStatus === "work"
            ? {...state, timeToDisplay: state.sessionLength}
            : {...state, timeToDisplay: state.breakLength};
        case "RESET":
            const audio = document.getElementById("beep");
            audio.pause();
            audio.currentTime = 0;
            return {...initialState};
        case "STOP_PLAY":
            return {...state, timerStatus: state.timerStatus === "on" ? "off" : "on"};
        case "TIMER_DECREMENT":
            return state.sessionStatus === "work" ? {...state,
                 workTimeToDisplay: timerDecrement(state.workTimeToDisplay)
                } 
            : {...state, breakTimeToDisplay: timerDecrement(state.breakTimeToDisplay)};
        case "SESSION_END":
            return {...state, alarm: "on"};
        case "SESSION_START":
            return {...state, alarm: "off"};
        case "TOGGLE_SESSION_STATUS":
            return state.sessionStatus === "work" ? {...state, sessionStatus: "break", breakTimeToDisplay: state.breakLength.toString().lenth > 1 ? `${state.breakLength}:00` : `0${state.breakLength}:00`} : {...state, sessionStatus: "work", workTimeToDisplay: state.sessionLength.toString().lenth > 1 ? `${state.sessionLength}:00` : `0${state.sessionLength}:00`};
        default:
            return state;
    }
};
//Actions:
const breakDecrement = () => ({type: "BREAK_DECREMENT"});
const breakIncrement = () => ({type: "BREAK_INCREMENT"});
const sessionDecrement = () => ({type: "SESSION_DECREMENT"});
const sessionIncrement = () => ({type: "SESSION_INCREMENT"});
const resetSession = () => ({type: "RESET"});
const stopPlay = () => ({type: "STOP_PLAY"});
const downCountTimer = () => ({type: "TIMER_DECREMENT"});
const setAlarmON = () => ({type: "SESSION_END"});
const setAlarmOFF = () => ({type: "SESSION_START"});
const setSessionStatus = () => ({type: "TOGGLE_SESSION_STATUS"});
//=============================================================================================================================//
//-------------------------------------------------------------------------
//Components:
const Title = ({ text }) => {
    return(
       
        <h1 className={classNames.Title}>{text}</h1>
        
    )
};
//-------------------------------------------------------------------------
const Alarm = ({ src }) => {
    return(
        <audio id="beep" preload="auto" src={src}></audio>
    )
}
//-------------------------------------------------------------------------
const Controller = ({ leftIcon, rightIcon, displayVal, displayID, leftBtnID, rightBtnID, leftHandler, rightHandler }) => {
    const Btn = ({ handler, icon, btnID }) => <div id={btnID} onClick={handler} className="btn">{icon}</div>
    const Display = ({ value, id }) => <div className="text-dark text-center border border-1 border-dark flex-grow-1 d-flex justify-content-center align-items-center" id={id}>{value}</div>
    return(
        <div className={classNames.Controller} id="controller">
            <Btn handler={leftHandler} btnID={leftBtnID} icon={leftIcon} /><Display id={displayID} value={displayVal} /><Btn handler={rightHandler} btnID={rightBtnID} icon={rightIcon}/>
        </div>
    )
}
//-------------------------------------------------------------------------
const Timer = ({ title, timeToDisplay, timerStatus }) => {
    
    const startStopIcon = timerStatus === "on" ? <i className="bi bi-pause-circle text-primary fs-3"></i> : <i className="bi bi-play-circle text-primary fs-3"></i>;
    const resetIcon = <i className="bi bi-arrow-clockwise text-primary fs-3"></i>;
    
    
    return(
        <div id="timer-label" className={classNames.Timer}>
            <h3 className="text-center pt-3">{title}</h3>
            <Controller displayID="time-left" leftIcon={startStopIcon} displayVal={timeToDisplay} rightIcon={resetIcon} leftBtnID="start_stop" rightBtnID="reset" />
        </div>
    )
}
//-------------------------------------------------------------------------
const Session = ({ title, sessionTime }) => {
    const decrement = <i className="bi bi-arrow-down-circle-fill text-primary fs-3"></i>;
    const increment = <i className="bi bi-arrow-up-circle-fill text-primary fs-3"></i>;
    return(
        <div id="session-label" className={classNames.Session}>
            <h3 id="" className="text-center pt-3">{title}</h3>
            <Controller leftIcon={decrement} displayVal={sessionTime}  displayID="session-length" rightIcon={increment} leftBtnID="session-decrement" rightBtnID="session-increment" />
        </div>
    )
}
//-------------------------------------------------------------------------
const Break = ({ title, breakTime }) => {
    const decrement = <i className="bi bi-arrow-down-circle-fill text-primary fs-3"></i>;
    const increment = <i className="bi bi-arrow-up-circle-fill text-primary fs-3"></i>;
    return(
        <div id="break-label" className={classNames.Break}>
            <h3 className="text-center pt-3">{title}</h3>
            <Controller leftIcon={decrement} displayVal={breakTime}  displayID="break-length" rightIcon={increment} leftBtnID="break-decrement" rightBtnID="break-increment" />
        </div>
    )
};
//-------------------------------------------------------------------------
//=============================================================CONTAINER=================================================================
const Container = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const [timerID, setTimerID] = React.useState("");
    //++++++
    const handlers = {
        "break-decrement": breakDecrement,
        "break-increment": breakIncrement,
        "session-decrement": sessionDecrement,
        "session-increment": sessionIncrement,
        "reset": resetSession,
        "start_stop": stopPlay,
    };
    //++++++
    const controllerHandler = (event) => {
        const btn = event.target.parentElement;
        if (handlers.hasOwnProperty(btn.id)){
          return dispatch(handlers[btn.id]());
        };
    };
    //++++++
    React.useEffect(() => {
        const container = document.querySelector(".main-container");
        container.addEventListener("click", controllerHandler);
        return () => container.removeEventListener("click", controllerHandler);
    }, []);
    //+++
    const timerLauncher = (interval) => {
        let intervalID = setInterval(() => dispatch(downCountTimer()), interval);
        setTimerID(intervalID);
    };
    //+++
    const playAlarm = () => {
        const audio = document.getElementById("beep");
        audio.play();
        let timerID = setTimeout(() => (audio.pause(), audio.currentTime = 0, clearTimeout(timerID)), 3000)
    };
    //+++
    React.useEffect(() => {
       state.timerStatus === "on" ? timerLauncher(1000) : clearInterval(timerID);
    }, [state.timerStatus]);
    //+++
    React.useEffect(() => {
        if (state.workTimeToDisplay === "00:00") {
            dispatch(setAlarmON());
            let timerID = setTimeout(() => (dispatch(setSessionStatus()), dispatch(setAlarmOFF())), 3000);
            return () => clearTimeout(timerID)
        } else if (state.breakTimeToDisplay === "00:00") {
            dispatch(setAlarmON());
            let timerID = setTimeout(() => (dispatch(setSessionStatus()), dispatch(setAlarmOFF())), 3000);
            return () => clearTimeout(timerID)
        }
     }, [state.workTimeToDisplay, state.breakTimeToDisplay]);
    React.useEffect(() => {
        if (state.alarm !== "off"){
            playAlarm();
        }
    }, [state.alarm])
    //+++
    return(
        <div className={classNames.Container}>
            <div className="d-flex justify-content-around">
                <Break title={pressets.Break.title} breakTime={state.breakLength} />
                <Session title={pressets.Session.title} sessionTime={state.sessionLength} />
            </div>
            <Timer title={state.sessionStatus === "work" ? "Session" : "Break"} timeToDisplay={state.sessionStatus === "work" ? state.workTimeToDisplay : state.breakTimeToDisplay} timerStatus={state.timerStatus}/>
            <Alarm src={pressets.Alarm.src} />
        </div>
    )
};
//=============================================================   END   =================================================================
//-------------------------------------------------------------------------
const App = () => {
    return (
      <div className={classNames.App}>
        <React.StrictMode>
          <Title text={pressets.Title.text} />
          <Container />
        </React.StrictMode>
      </div>
    );
  };
  //=============================================================
  ReactDOM.render(<App />, document.getElementById("root"));/////
  //=============================================================