"use strict";
//===========================================
//-------------------------------------------
//++++++
//+++
console.warn("JS LOADED");
//===========================================
const classNames = {
  App: `container-fluid bg-info`,
  Calculator: `container bg-dark position-absolute top-50 start-50 user-select-none`,
  Display: `container bg-warning d-flex justify-content-end align-items-end fs-4 ps-4 pe-4 text-break`,
  NumPad: `container`,
  Pad: `border border-dark bg-secondary text-center fw-bold fs-5 p-3`,
};

//++++++

const styles = {
  App: {
    height: "100vh",
    background:
      "linear-gradient(to right, rgb(175, 175, 175), rgb(2, 118, 153))",
  },
  Calculator: {
    width: "25%",
    // height: "300px",
    border: "1px solid black",
    transform: "translate(-50%, -50%)",
  },
  Display: {
    border: "1px solid black",
    height: "3em",
    fontFamily: "'Stardos Stencil', cursive",
    overflow: "hidden",
  },
  NumPad: {
    border: "1px solid black",
  },
  Pad: {
    fontFamily: "'Bitter', serif",
  },
};
//===========================================
//Pressets:
//Components:
const Pad = ({ t, c, padId }) => {
  return (
    <div className={c + " " + classNames.Pad} style={styles.Pad} id={padId}>
      {t}
    </div>
  );
};
//===========================================
const NumPad = (props) => {
  return (
    <div className={classNames.NumPad} style={styles.NumPad}>
      <div className="row">
        <Pad padId="clear" c="col-9" t="AC" />
        <Pad padId="divide" c="col-3" t="/" />
        <Pad padId="seven" c="col-3" t="7" />
        <Pad padId="eight" c="col-3" t="8" />
        <Pad padId="nine" c="col-3" t="9" />
        <Pad padId="multiply" c="col-3" t="x" />
        <Pad padId="four" c="col-3" t="4" />
        <Pad padId="five" c="col-3" t="5" />
        <Pad padId="six" c="col-3" t="6" />
        <Pad padId="subtract" c="col-3" t="-" />
        <Pad padId="one" c="col-3" t="1" />
        <Pad padId="two" c="col-3" t="2" />
        <Pad padId="three" c="col-3" t="3" />
        <Pad padId="add" c="col-3" t="+" />
        <Pad padId="zero" c="col-3" t="0" />
        <Pad padId="decimal" c="col-3" t="." />
        <Pad padId="equals" c="col-6" t="=" />
      </div>
    </div>
  );
};
const padsIdList = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "decimal",
  "clear",
  "divide",
  "multiply",
  "subtract",
  "add",
  "equals",
];
//===========================================
const Display = ({ valueToDisplay }) => {
  return (
    <div className={classNames.Display} style={styles.Display} id="display">
      {valueToDisplay}
    </div>
  );
};
//===========================================
const Calculator = () => {
  //Pressets:
  const [expression, setExpression] = React.useState("0");
  const [currentVal, setCurrentVal] = React.useState("");
  //----------------------------------------
  //Functions:
  //---------------------------------------------PADS HANDLER----------------------------------------//
  const padsHandler = (event) => {
    //Pressets:
    const regEx = {
      lastNum: /([1-9]{1}|[0\.])\d{0,}\.?\d{0,}$/g,  
    };
    const pad = event.target;
    let padValue = pad.textContent;
    if (padsIdList.includes(pad.id)) {
      if (padValue === "0") {
        return (setCurrentVal((prevVal) => prevVal === "" ? false : prevVal + padValue), setExpression((exp) => exp === "0" ? exp : exp + padValue))
    } if (/[1-9]/.test(padValue)){
        return (setCurrentVal((prevVal) => prevVal === "" ? padValue : prevVal + padValue), setExpression((exp) => exp === "0" ? padValue : exp + padValue))
    } if (padValue === ".") {
      return  (setCurrentVal(prevVal => /\./.test.prevVal ? false : prevVal + padValue), setExpression((exp) => /\./.test(exp.match(/([1-9]{1}|[0\.])\d{0,}\.?\d{0,}$/g)) ? exp : exp + padValue))
    } if (pad.id === "clear") {
      return (setCurrentVal(""), setExpression("0"))
    } if (/[+-/x]/.test(padValue)) {
      return (setCurrentVal(""), setExpression((exp) => exp + (padValue === "x" ? "*" : padValue)))
    } if (/=/.test(padValue)) {
      setCurrentVal("");
      const processStr = (str) => {
        const arrOfSubstring = str.match(/(([1-9]{1}|0\.)\d{0,}\.?\d{0,})|([+-/*]{1,})/g);
        const result = arrOfSubstring.map((item) => {
            return (/[+-/*]/.test(item) && item.length > 1 && !/\./.test(item))
              ? item[item.length - 1] === "-"
                ? item.slice(item.length - 2)
                : item.slice(item.length - 1)
              : item
          });
          return eval(result.map((item) => {
            return item === "--" ? "+" : item;
          }).join(""));
        };
      setExpression((exp) => {
        return processStr(exp)
      })
    }
  };
}
  //------------------------------------------------------------------------------------------------//
  const handlerInput = (e) => {
    console.log("expression: ", expression, "currentVal: ", currentVal);
  };
  //Hooks:
  React.useEffect(() => {
    const calculator = document.getElementById("calculator");
    calculator.addEventListener("click", padsHandler);
    return () => {
      calculator.removeEventListener("click", padsHandler);
    };
  }, []);
  //----------------------------------------
  return (
    <div
      className={classNames.Calculator}
      style={styles.Calculator}
      id="calculator"
    >
      <Display valueToDisplay={expression} />
      <NumPad />
      <input
        className="btn btn-primary"
        tybe="button"
        value="TEST"
        readOnly
        onClick={handlerInput}
      />
    </div>
  );
};
//===========================================
const App = () => {
  return (
    <div className={classNames.App} style={styles.App}>
      <Calculator />
    </div>
  );
};
//============================================================
ReactDOM.render(<App />, document.getElementById("root"));
//===========================================
