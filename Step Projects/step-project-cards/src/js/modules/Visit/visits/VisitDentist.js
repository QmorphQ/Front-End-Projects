//Class VisitDentist:

//Import:
import { Visit } from "../Visit.js";
import { templates } from "../../../data/templates.js";

class VisitDentist extends Visit {
  constructor ( options ) {
    super( options )
    this.options = options;
  }
  render(
    elementClassNameToAdd,
    closeBtnHandler = ( event ) => {
      if ( Array.from ( event.target.classList ).includes( "visit__close-btn" ) ) {
        console.warn("Default handler");
      }
    },
    position = "afterbegin"
  ) {
    document
      .querySelector( "." + elementClassNameToAdd )
      .insertAdjacentHTML( position, templates.visit.dentist );  
    document.body.addEventListener( "click", closeBtnHandler );
    document.body.addEventListener( "click", this.visitShowMore );
    this.fillFields();
  }
}

export { VisitDentist };