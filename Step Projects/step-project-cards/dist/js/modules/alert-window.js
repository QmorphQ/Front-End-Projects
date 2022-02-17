//===============
"use strict"; //+
//===============

//---------------
//Pressets:
let alertWindowClassName = `alert-window`;
//---------------

function createAlertWindow(HTMLTemplate) {
  return function (elementClassNameToAdd, message, position = "afterbegin") {
    document
      .querySelector("." + elementClassNameToAdd)
      .insertAdjacentHTML(position, HTMLTemplate);
    document.body.addEventListener("click", function handler(event) {
      let target = event.target,
        closeBtn = document.querySelector(".alert-window__close-btn"),
        alertWindow = document.querySelector(".alert-window");
      if (target === closeBtn || target !== alertWindow) {
        document.body.removeEventListener("click", handler);
        alertWindow.remove();
      }
    });
    document
      .querySelector("." + alertWindowClassName)
      .insertAdjacentText("afterbegin", message);
  };
}

export { createAlertWindow };
