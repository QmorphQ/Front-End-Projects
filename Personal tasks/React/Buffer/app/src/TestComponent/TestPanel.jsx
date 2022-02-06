import React, { useState } from "react";
import { TestItem } from "./TestItem/TestItem";
import classes from "./TestPanel.module.scss";

export function TestPanel({...args }) {
  const [active, setActive] = useState(0);
  const [storageData, updateStorageData] = useState(Object.keys(localStorage));
  //Service functions:
  //---------------------------------------------------------------
  const getClassName = (className) => {
    return classes["test_panel__" + className];
  };
  //---------------------------------------------------------------
  function btnHandler(e) {
    e.preventDefault();
    switch (e.target.name) {
      case "clear-storage":
        return localStorage.clear(), updateStorageData("");
      case "update-storage-data":
        return Object.keys(localStorage).length
          ? updateStorageData(Object.keys(localStorage))
          : updateStorageData("There is no any storage data");
    }
  }
  function toggleTestPanel(event) {
    if (event.key === "Z") {
      return active ? setActive(0) : setActive(1);
    }
  }
  //===============================================================
  document.addEventListener("keydown", toggleTestPanel);
  return (
    <div
      className={
        active ? classes.test_panel + " " + classes.active : classes.test_panel
      }
    >
      <h2 className={getClassName("title")}>Test Panel</h2>
      <TestItem
        handler={btnHandler}
        value={storageData}
        btnName={["update-storage-data", "clear-storage"]}
        {...args}
      />
    </div>
  );
}
