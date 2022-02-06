import React from "react";
import classes from "./NavMenu.module.scss";
import { MenuItem } from "./MenuItem/MenuItem";

export const NavMenu = ({ options = [], ...props }) => {
  const getClassName = (className) => {
    return className === "nav-menu"
      ? classes["nav-menu"]
      : classes["nav-menu__" + className];
  };
  return (
    <ul className={getClassName("nav-menu")}>
      {options.map((option) => {
        return <MenuItem key={option[0]} text={option[0]} path={option[1]} />;
      })}
    </ul>
  );
};
