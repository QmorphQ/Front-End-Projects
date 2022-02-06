import React from "react";
//Styles:
import classes from "./Button.module.scss";
//Library:
import PropTypes from "prop-types";

//======================================================================
export const Button = (props) => {
  return (
    <button
      className={classes.btn + " " + props.className}
      style={{ backgroundColor: props.bgcolor }}
      {...props}
    >
      {props.text}
    </button>
  );
};
//======================================================================

//Prop types:
Button.propTypes = {
  className: PropTypes.string,
};
Button.defaultProps = {
  className: "btn",
};
