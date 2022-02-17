//===============
"use strict"; //+
//===============

import { cardiologistString } from "../data/ templatesDoctor.js";
import { dentistString } from "../data/ templatesDoctor.js";
import { therapistString } from "../data/ templatesDoctor.js";

const templates = {
  alertWindow:
    '<div class="alert-window"><div class="alert-window__close-btn close-btn"></div></div>',

  loginForm: `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Enter your email and password</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input class="js-enter-email input" name="email" type="email" maxlength="25"">
        <input class="js-enter-password input" name="password" type="password"
        maxlength="20">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-primary me-md-2 btn" data-js="signInBtn" data-bs-dismiss="modal">Sign In</button>
        <button type="button" class="btn-secondary  btn"data-js="registration"><a
        href="https://ajax.test-danit.com/front-pages/cards-register.html"
        target="blank">Registration</a></button>
      </div>
    </div>
  </div>`,  

  visitDoctor: {
    doctor: `<div class="main__create-visit create-visit modal-window">
    <div class="create-visit__close-btn close-btn"></div>
    <h2 class="create-visit__title title">Create visit</h2>
    <label for="options" class="create-visit__label label">Doctor: 
      <select name="options" class="create-visit__options select">
          <option class="create-visit__option" value="Cardiologist">
              Cardiologist</option>
          <option class="create-visit__option" value="Dentist">Dentist</option>
          <option class="create-visit__option" value="Therapist">Therapist</option>
      </select>
    </label>
    <div class="create-visit__more-fields"></div>
    <button class="create-visit__btn btn">Create</button>
    <label class="reset-bth__label" for="reset">reset<input name="reset" class="create-visit__reset-btn reset-btn" type="reset"></label>
    </div>`,
    cardiologist: cardiologistString,

    dentist: dentistString,

    therapist: therapistString,
  },

  visit: {
    baseFields: `<div data-id="" class="visit">
    <div class="visit__close-btn close-btn"></div>
    <div class="visit__base-fields">
    <span data-field="name" class="visit__text">Full name: </span>
    <span data-field="doctor" class="visit__text">Doctor: </span>
    </div>
  </div>`,
    cardiologist: `<div data-id="" class="visit" draggable="true">
    <div class="visit__header"></div>
    <div class="visit__close-btn close-btn"></div>
    <div class="visit__base-fields">
      <span data-field="name" class="visit__text"><b>Full name:</b> </span>
      <span data-field="doctor" class="visit__text"><b>Doctor:</b> </span>
    </div>
    <div class="visit__more-fields">
      <span data-field="title" class="visit__text"><b>Purpose of the visit:</b> </span>
      <span data-field="description" class="visit__text"><b>Brief description of the visit:</b> </span>
      <span data-field="priority" class="visit__text"><b>Visit priority:</b> </span>
      <span data-field="np" class="visit__text"><b>Normal pressure:</b> </span>
      <span data-field="weight" class="visit__text"><b>Body mass index:</b> </span>
      <span data-field="diseases" class="visit__text"><b>Past diseases of the cardiovascular system:</b> </span>
      <span data-field="age" class="visit__text"><b>Full Age:</b> </span>
     </div>
     <div class="visit__btn-container">
     <button class="visit__more-btn btn">show</button>
     <label class="edit-btn ">edit<button class="edit__inner-btn visit__edit-btn btn"></button></label>
     </div></div>`,
    dentist: `<div data-id="" class="visit" draggable="true">
    <div class="visit__header"></div>
    <div class="visit__close-btn close-btn"></div>
    <div class="visit__base-fields">
      <span data-field="name" class="visit__text"><b>Full name:</b> </span>
      <span data-field="doctor" class="visit__text"><b>Doctor:</b> </span>
    </div>
    <div class="visit__more-fields">
      <span data-field="title" class="visit__text"><b>Purpose of the visit:</b> </span>
      <span data-field="description" class="visit__text"><b>Brief description of the visit:</b> </span>
      <span data-field="priority" class="visit__text"><b>Visit priority:</b> </span>
    <span type="date" data-field="last-visit-date" class="visit__text"><b>Date of last visit:</b> </span> 
     </div>
     <div class="visit__btn-container">
     <button class="visit__more-btn btn">show</button>
     <label class="edit-btn ">edit<button class="edit__inner-btn visit__edit-btn btn"></button></label>
     </div>
    </div>`,
    therapist: `<div data-id="" class="visit" draggable="true">
    <div class="visit__header"></div>
    <div class="visit__close-btn close-btn"></div>
    <div class="visit__base-fields">
      <span data-field="name" class="visit__text"><b>Full name:</b> </span>
      <span data-field="doctor" class="visit__text"><b>Doctor:</b> </span>
    </div>
    <div class="visit__more-fields">
      <span data-field="title" class="visit__text"><b>Purpose of the visit:</b> </span>
      <span data-field="description" class="visit__text"><b>Brief description of the visit:</b> </span>
      <span data-field="priority" class="visit__text"><b>Visit priority:</b> </span>
      <span data-field="age" class="visit__text"><b>Age:</b> </span>
     </div>
     <div class="visit__btn-container">
     <button class="visit__more-btn btn">show</button>
     <label class="edit-btn ">edit<button class="edit__inner-btn visit__edit-btn btn"></button></label>
     </div>
    </div>`,
  },
};
export { templates };
