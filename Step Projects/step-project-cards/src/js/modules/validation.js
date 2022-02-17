"use strict";

class Validator {
  constructor(options) {
    (this.name = options.name),
      (this.classList = options.classList),
      (this.value = options.value.replace(/\s+/g, "")),
      (this.length = options.length);
  }

  validField() {
    const validPriority =
      this.name === "priority" && +this.value < 4 && this.value > 0;
    

    const validAge = this.name === "age" && +this.value > 0 && this.value < 131;
    

    const validNameAndTitle =
      (this.name === "name" || this.name === "title") &&
      this.value.length > 1 &&
      this.value.length < 31;
    

    const validWeight =
      this.name === "weight" && +this.value > 0 && this.value < 301;
    

    const validNp =
      this.name === "np" &&
      this.value.length === 7 &&
      this.value[3] === "/" &&
      +this.value.slice(0, 3) > +this.value.slice(4, 7);
    

    const validDiseases =
      this.name === "diseases" &&
      this.value.length > 2 &&
      this.value.length < 51;
    

    const validDescription = this.name === "description";

    const validDateLastVisit = this.name === "last-visit-date" &&  this.value !== '';

    let flag;

    if (
      validPriority ||
      validAge ||
      validNameAndTitle ||
      validWeight ||
      validNp ||
      validDiseases ||
      validDescription ||
      validDateLastVisit
    ) {
      this.classList.remove("create-visit__input--not-valid");
      flag = true;
    } else {
      this.classList.add("create-visit__input--not-valid");
      flag = false;
    }

    return flag;
  }
}

class ValidatorArr {
  constructor(options) {
    this.arrValid = options;
  }
  validFormField() {
    return this.arrValid.reduce((r, c) => r * c);
  }
}

export { Validator, ValidatorArr };
