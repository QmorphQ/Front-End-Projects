import React from "react";
import { setModalWindowState } from "../../store/actions/modalActionsCreators";
import { useDispatch, useSelector } from "react-redux";
//Styles:
import classes from "./Modal.module.scss";
//Library:
import PropTypes from "prop-types";

//===========================================================================
export const Modal = ({ modalcolor, header, setCloseBtn, text, ...args}) => {

  const dispatch = useDispatch();
  const active = useSelector((state) => state.modalWindow.modalIsActive)
  //----------------------------------------------------------------
  
  return (
    <div
      onClick={(e) => dispatch(setModalWindowState(false))}
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
              onClick={(e) => dispatch(setModalWindowState(false))}
            ></button>
          )}
        </div>
        <div className={classes.modal__body}>{text}</div>
        <div className={classes.modal__footer}>
          <button
            onClick={(e) =>
              args.procedure() ||
              setTimeout((e) => dispatch(setModalWindowState(false)), 0)
            }
            className={classes.modal__footer__successBtn}
          >
            Ok
          </button>
          <button
            onClick={(e) => dispatch(setModalWindowState(false))}
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
  modalcolor: PropTypes.string,
  header: PropTypes.string,
  setCloseBtn: PropTypes.bool,
  text: PropTypes.string,
  procedure: PropTypes.func,
};
Modal.defaultProps = {
  header: "Test 'Header'",
  text: "Test 'Body'",
  modalcolor: "rgb(163, 163, 163)",
  procedure: () => console.warn("Action is set, test 'Default'"),
};
