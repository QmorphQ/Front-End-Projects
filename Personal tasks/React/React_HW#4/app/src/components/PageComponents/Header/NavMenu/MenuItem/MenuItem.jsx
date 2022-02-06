import React from "react";
import classes from "./MenuItem.module.scss";
import { Link } from "react-router-dom";

export const MenuItem = ({ text, path, ...props }) => {
  const getClassName = (className) => {
    return className === "menu-item"
      ? classes["menu-item"]
      : classes["menu-item__" + className];
  };
  const MenuOption = () => {
    return (
      <Link to={path} className={getClassName("menu-option")}>
        {text}
      </Link>
    );
  };
  return (
    <li
      className={getClassName("menu-item")}
      onClick={(e) => {
          if (document.querySelector("." + getClassName("menu-option-active"))){
        document.querySelector("." + getClassName("menu-option-active")).className = getClassName("menu-option");
          }
        return e.target.className = getClassName("menu-option-active");
      }}
    >
      <MenuOption />
    </li>
  );
};
