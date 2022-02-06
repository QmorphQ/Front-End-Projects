import React from "react";
//Styles:
import classes from "./Modal.module.scss";
//Library:
import PropTypes from "prop-types";

//===========================================================================
export const Modal = ({active, setActive, modalcolor, header, setCloseBtn, text, ...args}) => {
  //----------------------------------------------------------------
  return (
    <div
      onClick={(e) => setActive(false)}
      className={
        active
          ? classes.modal__overlay + " " + classes.active
          : classes.modal__overlay
      }
    >
      <div
        style={{ backgroundColor: modalcolor }}
        className={classes.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.modal__header}>
          {header}
          {setCloseBtn && (
            <button
              className={classes.modal__header__closeBtn}
              onClick={(e) => setActive(false)}
            ></button>
          )}
        </div>
        <div className={classes.modal__body}>{text}</div>
        <div className={classes.modal__footer}>
          <button
            onClick={(e) =>
              args.procedure() ||
              setTimeout((e) => setActive(false), 0)
            }
            className={classes.modal__footer__successBtn}
          >
            Ok
          </button>
          <button
            onClick={(e) => setActive(false)}
            className={classes.modal__footer__closeBtn}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
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
