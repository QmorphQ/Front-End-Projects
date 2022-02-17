"use strict";

//Pressets:


//===========================================================================

//Class:
//-----------
class Visit {
  constructor(HTMLTemplate, options = null) {

    //Properties:
    //-------------------------------
    this.options = options;
    this.HTMLTemplate = HTMLTemplate;
    //-------------------------------
  }

  //Methods:
  //Render visit on page (params = {elementClassNameToAdd: where to render, handler: handler for close button, position})
  //-----------------------------------------------------------------------
  render(
    elementClassNameToAdd,
    closeBtnHandler = (event) => {
      if (Array.from(event.target.classList).includes("visit__close-btn")) {
        console.warn("Default handler");
      }
    },
    position = "afterbegin"
  ) {
    document
      .querySelector("." + elementClassNameToAdd)
      .insertAdjacentHTML(position, this.HTMLTemplate);  
    document.body.addEventListener("click", closeBtnHandler);
    document.body.addEventListener("click", this.visitShowMore);
    this.fillFields();
  }

  //Handler for visit show more btn:
  //-----------------------------------------------------------------------
  visitShowMore (event) {
    if (Array.from(event.target.classList).includes("visit__more-btn")) {
      //Работает если не меняется разметка карточки "Visit".
      let target = event.target;
      let moreFieldsDiv = target.closest(".visit").childNodes[7];
      moreFieldsDiv.classList.toggle("height-out");
      if (
        moreFieldsDiv.style.maxHeight !== 0 &&
        moreFieldsDiv.style.zIndex == 0
      ) {
        target.innerHTML = "hide";
        moreFieldsDiv.style.zIndex = 1000;
        target.disabled = true;
        setTimeout((e) => {
          target.disabled = false;
        }, 500);
      } else if (moreFieldsDiv.style.zIndex == 1000) {
        target.innerHTML = "show";
        target.disabled = true;
        setTimeout((e) => {
          target.disabled = false;
          moreFieldsDiv.style.zIndex = 0;
        }, 500);
      }
    }
  }
  //-----------------------------------------------------------------------
  
  //Pass text in the text fields from optins parameter:
  //-----------------------------------------------------------------------
  fillFields() {
    document
      .querySelector(".visit")
      .setAttribute("data-id", this.options.id);
    let fields = Array.from(
      document.querySelectorAll(
        `.visit[data-id="${this.options.id}"] .visit__text`
      )
    );

    fields.forEach((field) => {
      field.insertAdjacentText(
        "beforeend",
        this.options[field.getAttribute("data-field")] || "no description"
      );
    });
  }
  //-----------------------------------------------------------------------
  
};


//Export:
//---------------
export { Visit };
//---------------