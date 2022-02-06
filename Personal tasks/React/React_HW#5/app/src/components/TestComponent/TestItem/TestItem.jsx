import React from "react";
import classes from "../TestPanel.module.scss";

export const TestItem = ({ handler, value, btnName }) => {

    const getClassName = (className) => {
        return classes["test_panel__" + className];
      };

    return(
        <form className={getClassName("form")}>
        <label className={getClassName("storage-label")} htmlFor="storage data">
          Local Storage
        </label>
        <textarea
          wrap="hard"
          disabled
          className={getClassName("storage-display")}
          name="storage data"
          value={value}
        ></textarea>
        <div className={getClassName("btn-container")}>
        <button
          name={btnName[0]}
          onClick={handler}
          className={getClassName("form-btn")}
        >
          Update Data
        </button>
        <button
          name={btnName[1]}
          onClick={handler}
          className={getClassName("form-btn")}
        >
          Clear Storage
        </button>
        </div>
      </form>
    )
}