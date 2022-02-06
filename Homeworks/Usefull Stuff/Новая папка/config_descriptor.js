//Fuction to show own properties:
function descriptors_list(obj, prop) {
    let initialProp = "__" + prop;
    console.log(Object.getOwnPropertyDescriptor(obj, initialProp));
  }
  //=====================================================//
//Function to config own properties. flag: 'w' - writable, 'c' - configurable, 'e' - enumerable, 'v' - number or string; descriptorValue: false, true; show: 0, 1 - console log results.
  function descriptors_config(obj, prop, flag, descriptorValue, show = 0) {
    //---------------------
    //Pressets:
    const descriptors = ["writable", "enumerable", "configurable", "value"];
    let f = flag.toLowerCase();
    let descriptor = descriptors.find((item) => item[0] === f);
    let initialProp = "__" + prop;
    let A = Object.getOwnPropertyDescriptor(obj, initialProp);
    function objProp (obj = obj, initialProp = initialProp ) {
      return Object.getOwnPropertyDescriptor(obj, initialProp);
    };
    //---------------------
    //Function:
    //Validations:
    if (
      !["w", "c", "e", "v"].includes(f) ||
      (![false, true].includes(descriptorValue) && flag !== "v") ||
      ((flag === "v") && ( !["number", "string" ].includes(typeof (descriptorValue)))))
     {
      console.log(
        "%c Invalid value. Please, enter correctly (flag: 'w' - writable, 'c' - configurable, 'e' - enumerable, 'v' - number or string; descriptorValue: false, true; show: 0, 1).",
        "background: orange; color: blue;"
      );
      //-------------------
    } else if (
      (objProp(obj, initialProp)['configurable'] === false) &&
      ["enumerable", "value"].includes(descriptor)
    ) {
      return console.log(
        `%c Declined. Please, set configurable = true to proceed.`,
        "color: red;"
      );
      //-------------------
      //Core function code:
    } else {
      if (show === 1) {
        console.log(
          `${descriptor}:` +
            " " +
            objProp(obj, initialProp)[`${descriptor}`] +
            " " +
            "%c - before",
          "color: green;"
        );
      }
      let a = {};
      a[`${descriptor}`] = descriptorValue;
      Object.defineProperty(obj, initialProp, a);
      if (show === 1) {
        descriptors_list(obj, prop);
      }
      if (show === 1) {
        console.log(
          `${descriptor}:` +
            " " +
            objProp(obj, initialProp)[`${descriptor}`] +
            " " +
            "%c - after",
          "color: yellow;"
        );
      }
    }
  }