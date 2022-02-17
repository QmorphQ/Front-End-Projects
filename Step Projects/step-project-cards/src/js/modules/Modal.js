"use strict";


import { templates } from "../data/templates.js";
class Modal {
  constructor(elementClassNameToAdd) {
    this.elementClassNameToAdd = elementClassNameToAdd;
  }

  addCloseBtn() {
    let closeBtn = document.querySelector(".create-visit__close-btn");
    document.body.addEventListener("click", function handler(event) {
      let target = event.target;
      if (
        target === closeBtn ||
        target === document.querySelector(".backstage")
      ) {
        document.querySelector(".create-visit").remove();
        document.querySelector(".backstage").remove();
        document.body.removeEventListener("click", handler);
      }
    });
  }

  //Дополнение полей для выбранного врача

  switchDoctor() {
    let visitMoreFields = document.querySelector(".create-visit__more-fields");
    let doctor = document.querySelector(".create-visit__options");
    return (visitMoreFields.innerHTML =
      templates.visitDoctor[doctor.value.toLowerCase()]);
  }

  // Слушатель элемента 'select' для выбора врача

  addMoreFields() {
    document
      .querySelector(".create-visit__options")
      .addEventListener("change", (event) => {
        this.switchDoctor();
      });
  }

  //обработчик для create-visit__reset-btn

  resetModalBtn(event) {
    let modalInputs = Array.from(
      document.querySelectorAll(".create-visit__input")
    );
    modalInputs.forEach((text) => {
      text.value = "";
    });
  }

  //Визуализация модального окна

  render(
    handler = () => console.warn("No attached handler!"),
    defaultOption = "Cardiologist"
  ) {
    let targetElem = document.querySelector("." + this.elementClassNameToAdd);
    targetElem.insertAdjacentHTML("afterbegin", templates.visitDoctor.doctor);
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div class="backstage"></div>`
    );
    document.querySelector(".create-visit select").value = defaultOption;
    document
      .querySelector(".create-visit__btn")
      .addEventListener("click", handler);
    document.querySelector(".create-visit__reset-btn").onclick =
      this.resetModalBtn;
    this.addCloseBtn();
    this.addMoreFields();
    this.switchDoctor();
  }
}

export {Modal};

