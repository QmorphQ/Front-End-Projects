import React, { useState } from "react";
import { Formik } from "formik";
import NumberFormat from "react-number-format";
import * as Yup from "yup";
//Styles:
import classes from "./CartForm.module.scss";

function validateMobileNumber(value) {
  return /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
}

export const CartForm = (props) => {
  const [valid, setValid] = useState(1);
  const validationShema = Yup.object().shape({
    firstName: Yup.string()
      .typeError("must be a string")
      .min(2, "too short")
      .max(20, "too long")
      .required("required"),
    lastName: Yup.string()
      .typeError("must be a string")
      .min(2, "too short")
      .max(20, "too long")
      .required("required"),
    age: Yup.number()
      .typeError("must be a number")
      .min(16, "too young")
      .max(120, "unbeliveable")
      .required("required"),
    adress: Yup.string()
      .typeError("must be a string")
      .min(5, "too short")
      .max(30, "too long")
      .required("required"),
    mobileNumber: Yup.string().required("required"),
  });

  const getClassName = (className) => {
    return className === "cart-form"
      ? classes["cart-form"]
      : classes["cart-form__" + className];
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
          adress: "",
          mobileNumber: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values); 
          props.handler();
        }}
        validationSchema={validationShema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={getClassName("cart-form")}>
            <div className={getClassName("input-container")}>
              <label htmlFor={"firstName"}>firstname:</label>
              <input
                type={"text"}
                name={"firstName"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {touched.firstName && errors.firstName ? (
                <p className={getClassName("error")}>{errors.firstName}</p>
              ) : null}
            </div>
            <div className={getClassName("input-container")}>
              <label htmlFor={"lastName"}>lastname:</label>
              <input
                type={"text"}
                name={"lastName"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              {touched.lastName && errors.lastName ? (
                <p className={getClassName("error")}>{errors.lastName}</p>
              ) : null}
            </div>
            <div className={getClassName("input-container")}>
              <label htmlFor={"age"}>age:</label>
              <input
                type={"text"}
                name={"age"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
              />
              {touched.age && errors.age ? (
                <p className={getClassName("error")}>{errors.age}</p>
              ) : null}
            </div>
            <div className={getClassName("input-container")}>
              <label htmlFor={"adress"}>adress:</label>
              <input
                type={"text"}
                name={"adress"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.adress}
              />
              {touched.adress && errors.adress ? (
                <p className={getClassName("error")}>{errors.adress}</p>
              ) : null}
            </div>
            <div className={getClassName("input-container")}>
              <label htmlFor={"mobileNumber"}>mobile number:</label>
              <NumberFormat
                onChange={handleChange}
                onBlur={handleBlur}
                name={"mobileNumber"}
                thousandsGroupStyle="thousand"
                value={values.mobileNumber}
                placeholder="(###) ###-##-##"
                displayType="input"
                type="text"
                format="(###) ###-##-##"
              />
              {touched.mobileNumber && errors.mobileNumber ? (
                <p className={getClassName("error")}>{errors.mobileNumber}</p>
              ) : valid ? null : (
                <p className={getClassName("error")}>complete mobile number</p>
              )}
            </div>
            <button
              className={getClassName("submit-btn")}
              disabled={!isValid && !dirty}
              onClick={() => {
                if (!validateMobileNumber(values.mobileNumber)) {
                  return setValid(0);
                } else {
                  setValid(1);
                  return handleSubmit();
                }
              }}
              type={"submit"}
            >
              Checkout 
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};
