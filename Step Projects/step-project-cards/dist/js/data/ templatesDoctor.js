const bodyOptionСardiologist = [
  {
    titleField: "Purpose of the visit",
    name: "title",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput:
      '"text" minlength="2" maxlength="30" placeholder="required, from 2 to 30 characters"',
  },

  {
    titleField: "Visit priority",
    name: "priority",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput: '"number" value="1" min="1" max="3"',
  },
  {
    titleField: "Fullname",
    name: "name",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput:
      '"text" minlength="2" maxlength="30" placeholder="required, from 2 to 30 characters"',
  },
  {
    titleField: "Normal pressure:",
    name: "np",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput:
      '"text" minlength="7" maxlength="7" placeholder="required, format SBP/DBP (000/000)"',
  },
  {
    titleField: "Body mass index:",
    name: "weight",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput:
      '"number" min="1" max="300" placeholder="required, numbers from 1 to 300"',
  },
  {
    titleField: "Past diseases of the cardiovascular system:",
    name: "diseases",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput:
      '"text" minlength="3" maxlength="50" placeholder="required, from 3 to 50 characters"',
  },
  {
    titleField: "Age",
    name: "age",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput:
      '"number" min="1" max="130" placeholder="required, numbers from 1 to 130"',
  },
];

const bodyOptionDentist = [
  {
    titleField: "Purpose of the visit",
    name: "title",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput: '"text" minlength="2" maxlength="30" placeholder="required, from 2 to 30 characters"',
  },

  {
    titleField: "Visit priority",
    name: "priority",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput: '"number" value="1" min="1" max="3"',
  },
  {
    titleField: "Fullname",
    name: "name",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput: '"text" minlength="2" maxlength="30" placeholder="required, from 2 to 30 characters"',
  },
  {
    titleField: "Date of last visit:",
    name: "last-visit-date",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput: '"date"',
  },
];

const bodyOptionTherapist = [
  {
    titleField: "Purpose of the visit",
    name: "title",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput: '"text" minlength="2" maxlength="30" placeholder="required, from 2 to 30 characters"',
  },

  {
    titleField: "Visit priority",
    name: "priority",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput: '"number" value="1" min="1" max="3"',
  },
  {
    titleField: "Fullname",
    name: "name",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput: '"text" minlength="2" maxlength="30" placeholder="required, from 2 to 30 characters"',
  },
  {
    titleField: "Age",
    name: "age",
    classLabel: "create-visit__label label",
    classInput: "create-visit__input input",
    typeInput: '"number" min="1" max="130" placeholder="required, numbers from 1 to 130"',
  },
];

class DoctorTemplates {
  constructor(options) {
    (this.titleField = options.titleField),
      (this.name = options.name),
      (this.classLabel = options.classLabel),
      (this.classInput = options.classInput),
      (this.typeInput = options.typeInput);
  }
  assemblyElement() {
    const label = `<label for="${this.name}" class="${this.classLabel}">${this.titleField}:<input type=${this.typeInput} class="${this.classInput}" name="${this.name}"></label>`;
    return label;
  }
}

class bodyDoctor {
  constructor(bodyOption) {
    this.bodyOption = bodyOption;
  }
  assemblyOfTheTemplate() {
    const templatesDoctor = [];
    this.bodyOption.forEach((element) => {
      let doctorElement = new DoctorTemplates(element);
      // let doctorElement = new DoctorDentistTemplates(element);
      let elementLabel = doctorElement.assemblyElement();
      templatesDoctor.push(elementLabel);
    });
    const item =
      '<label for="description" class="create-visit__label label">Brief description of the visit:<textarea rows="5" cols="40" type="text" class="create-visit__input input" name="description" placeholder="This field is optional"></textarea></label>';
    templatesDoctor.splice(1, 0, item);
    const doctorTemplate = templatesDoctor.join("");
    return doctorTemplate;
  }
}

const cardiologist = new bodyDoctor(bodyOptionСardiologist);
const cardiologistString = cardiologist.assemblyOfTheTemplate();

const dentist = new bodyDoctor(bodyOptionDentist);
const dentistString = dentist.assemblyOfTheTemplate();

const therapist = new bodyDoctor(bodyOptionTherapist);
const therapistString = therapist.assemblyOfTheTemplate();

export { cardiologistString };
export { dentistString };
export { therapistString };
