import React from "react";
//Styles:
import classes from "./Button.module.scss";
//Library:
import PropTypes from "prop-types";

//======================================================================
export const Button = ({ text, bgcolor, className, ...props }) => {

  
    return (
      <button
        className={classes.btn + " " + className}
        style={{ backgroundColor: bgcolor }}
        {...props}
      >
        {text}
      </button>
    );
  
}
//======================================================================

//Prop types:
Button.propTypes = {
  className: PropTypes.string,
};
Button.defaultProps = {
  className: 'btn',
};