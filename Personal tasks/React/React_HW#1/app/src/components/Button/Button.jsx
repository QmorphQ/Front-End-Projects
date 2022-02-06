import React from "react";
import classes from "./Button.module.scss";

//===========================================================================

export class Button extends React.Component {

  //-------------------------------------------------------
  render() {
    return (
      <button
        className={classes.btn}
        style={{ backgroundColor: this.props.bgcolor }}
        {...this.props}
      >
        {this.props.text}
      </button>
    );
  }
}
