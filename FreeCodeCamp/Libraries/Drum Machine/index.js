"use strict";
//============================================================
//Pressets:
const classNames = {
  App: `container-fluid bg-info`,
  DrumMachine: `container bg-dark d-flex flex-column justify-content-around align-items-center flex-wrap `,
  Display: `bg-primary d-flex justify-content-center align-items-center user-select-none fw-bold fs-3 flex-wrap my-3`,
  PadsContainer: `container bg-secondary list-group d-flex flex-row justify-content-around flex-wrap my-3`,
  DrumPad: `drum-pad list-group-item d-flex justify-content-center align-items-center fw-bold fs-3 m-2 user-select-none`,
  Clip: `clip`,
};
//++++++
const styles = {
  App: {
    height: "100vh",
    background:
    "linear-gradient(to right, rgb(175, 175, 175), rgb(2, 118, 153))"
  },
  DrumMachine: {
    width: "fit-content",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    border: "6px solid gray",
    borderRadius: "3px",
    borderStyle: "double",
  },
  Display: {
    border: "1px solid black",
    width: "40%",
    height: "100px",
    backgroundImage:
      "linear-gradient(to top, rgba(39, 39, 39, 0.7), rgba(0, 0, 0, 0.924))",
    color: "#46ff03",
    textShadow:
      "0 0 10px rgb(100, 145, 120), 0 0 20px rgb(100, 145, 120), 0 0 30px #46ff03, 0 0 40px #46ff03, 0 0 50px #46ff03, 0 0 60px #46ff03, 0 0 70px #46ff03",
    border: "3px solid yellow",
    borderRadius: "1em",
  },
  PadsContainer: {
    border: "2px solid black",
    width: "fit-content",
    background:
      "linear-gradient(to right, rgb(173, 173, 173), rgb(44, 44, 44))",
  },
  DrumPad: {
    color: "#fff",
    backgroundColor: "#000",
    width: "2em",
    height: "2em",
    border: "6px solid #fff",
    borderStyle: "double",
    borderRadius: "50%",
    cursor: "pointer",
    textShadow: "none",
  },
  activePad: {
    color: "#46ff03",
    backgroundColor: "#000",
    width: "2em",
    height: "2em",
    border: "6px solid #46ff03",
    borderStyle: "double",
    borderRadius: "50%",
    cursor: "pointer",
    textShadow:
      "0 0 10px rgb(100, 145, 120), 0 0 20px rgb(100, 145, 120), 0 0 30px #46ff03, 0 0 40px #46ff03, 0 0 50px #46ff03, 0 0 60px #46ff03, 0 0 70px #46ff03",
  },
};
//++++++
const store = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    description: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    description: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    description: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    description: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    description: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    description: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    description: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    description: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    description: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];
const padsPressets = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
//++++++
//------------------------------------------------------------
//++++++
//+++
//------------------------------------------------------------
//1.)
//++++++
const DrumPad = ({ keyText, nameToDisplay, src }) => {
  return (
    <li
      style={styles.DrumPad}
      className={classNames.DrumPad}
      id={nameToDisplay}
    >
      <audio className={classNames.Clip} id={keyText} src={src}></audio>
      {keyText}
    </li>
  );
};
//++++++
const PadsContainer = ({ samplesCollection }) => {
  return (
    <ul style={styles.PadsContainer} className={classNames.PadsContainer}>
      {samplesCollection.map((padPresset) => (
        <DrumPad
          key={padPresset.keyCode}
          keyText={padPresset.keyTrigger}
          nameToDisplay={padPresset.description}
          src={padPresset.url}
        />
      ))}
    </ul>
  );
};
//className="drum-pad"
//------------------------------------------------------------
//2.)
const Display = ({ sampleName }) => {
  return (
    <div id="display" className={classNames.Display} style={styles.Display}>
      {sampleName}
    </div>
  );
};
//id="display"
//------------------------------------------------------------
//3.)
const DrumMachine = ({ data }) => {
  const [display, setDisplay] = React.useState("---");
  //++++++
  const updateDisplay = (value) => {
    setDisplay(value);
  };
  //++++++${}
  const updateElemStyle = (obj, node) => {
    for (let prop in obj) {
      node.style[prop] = obj[prop];
    }
  };
  //++++++
  const padHandler = (event) => {
    if (padsPressets.includes(event.target.textContent)) {
      const pad = event.target;
      updateElemStyle(styles.activePad, pad);
      setTimeout(() => updateElemStyle(styles.DrumPad, pad), 200);
      updateDisplay(`- ${event.target.id} -`);
      pad.querySelector("audio").currentTime = 0;
      pad.querySelector("audio").play();
    }
  };
  //++++++
  const playClipOnKeyPress = (event) => {
    const clip = document.querySelector(`#${event.key.toUpperCase()}`);
    if (padsPressets.includes(event.key.toUpperCase())) {
      const pad = clip.parentElement;
      updateElemStyle(styles.activePad, pad);
      setTimeout(() => updateElemStyle(styles.DrumPad, pad), 200);
      updateDisplay(
        `- ${
          store.find(
            (padPresset) => padPresset.keyTrigger === event.key.toUpperCase()
          ).description
        } -`
      );
      clip.currentTime = 0;
      clip.play();
    }
  };
  //++++++
  React.useEffect(() => {
    const drumMachine = document.getElementById("drum-machine");
    drumMachine.addEventListener("click", padHandler);
    document.addEventListener("keypress", playClipOnKeyPress);
    return () => drumMachine.removeEventListener("click", padHandler);
  }, []);
  //++++++
  return (
    <div
      id="drum-machine"
      className={classNames.DrumMachine}
      style={styles.DrumMachine}
    >
      <Display sampleName={display} />
      <PadsContainer samplesCollection={data} />
    </div>
  );
};
//id="drum-machine"
//------------------------------------------------------------
const App = () => {
  return (
    <div className={classNames.App} style={styles.App}>
      <DrumMachine data={store} />
    </div>
  );
};
//============================================================
ReactDOM.render(<App />, document.getElementById("root"));
