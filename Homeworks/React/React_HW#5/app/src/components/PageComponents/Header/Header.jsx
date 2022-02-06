import React from "react";
import classes from "./Header.module.scss";
import { NavMenu } from "./NavMenu/NavMenu";

export const Header = ({ children, ...props }) => {
  const getClassName = (className) => {
    return className === "header"
      ? classes.header
      : classes.header + "__" + className;
  };

  return (
    <div className={getClassName("header")}>
      <NavMenu {...props}/>
    </div>
  );
};
