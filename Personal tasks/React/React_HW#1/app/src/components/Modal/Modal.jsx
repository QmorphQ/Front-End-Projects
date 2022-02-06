import React from "react";
import classes from "./Modal.module.scss";


//===========================================================================

export class Modal extends React.Component {

//----------------------------------------------------------------------------
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
                setTimeout((e) => this.props.setActive(false), 1000)
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
