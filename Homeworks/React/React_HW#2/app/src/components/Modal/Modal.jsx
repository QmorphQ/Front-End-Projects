import React from "react";
//Styles:
import classes from "./Modal.module.scss";
//Library:
import PropTypes from "prop-types";

//===========================================================================
export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    }
  }
  render() {
    return (
      <div
        onClick={(e) => this.props.setActive(false)}
        className={
          this.props.active
            ? classes.modal__overlay + " " + classes.active
            : classes.modal__overlay
        }
      >
        <div
          style={{ backgroundColor: this.props.modalcolor }}
          className={classes.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.modal__header}>
            {this.props.header}
            {this.props.setCloseBtn && (
              <button
                className={classes.modal__header__closeBtn}
                onClick={(e) => this.props.setActive(false)}
              ></button>
            )}
          </div>
          <div className={classes.modal__body}>{this.props.text}</div>
          <div className={classes.modal__footer}>
            <button
              onClick={(e) =>
                this.props.procedure() ||
                setTimeout((e) => this.props.setActive(false), 0)
              }
              className={classes.modal__footer__successBtn}
            >
              Ok
            </button>
            <button
              onClick={(e) => this.props.setActive(false)}
              className={classes.modal__footer__closeBtn}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
//===========================================================================

//Prop types:
Modal.propTypes = {
  setActive: PropTypes.func,
  active: PropTypes.bool,
  modalcolor: PropTypes.string,
  header: PropTypes.string,
  setCloseBtn: PropTypes.bool,
  text: PropTypes.string,
  procedure: PropTypes.func,
};
Modal.defaultProps = {
  active: false,
  header: "Test 'Header'",
  text: "Test 'Body'",
  modalcolor: "rgb(163, 163, 163)",
  procedure: () => console.warn("Action is set, test 'Default'"),
};
