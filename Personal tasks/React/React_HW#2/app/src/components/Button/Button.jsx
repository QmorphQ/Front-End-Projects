import React from "react";
//Styles:
import classes from "./Button.module.scss";
//Library:
import PropTypes from "prop-types";

//======================================================================
export class Button extends React.Component {

  render() {
    return (
      <button
        className={classes.btn + " " + this.props.className}
        style={{ backgroundColor: this.props.bgcolor }}
        {...this.props}
      >
        {this.props.text}
      </button>
    );
  }
}
//======================================================================

//Prop types:
Button.propTypes = {
  className: PropTypes.string,
};
Button.defaultProps = {
  className: 'btn',
};