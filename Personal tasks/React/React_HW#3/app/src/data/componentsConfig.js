export const configs = [
  {
    btn: "alert",
    text: "Open first modal",
    bgcolor: "red",
  },
  {
    btn: "relax",
    text: "Open second modal",
    bgcolor: "green",
  },
  {
    btn: "default",
    text: "Test 'Text'",
    bgcolor: "gray",
  },
  {
    modal: "alert",
    header: "Do you want to delete this file?",
    text: `Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?`,
    modalcolor: "rgb(210, 40, 40)",
    procedure: () =>
      console.warn("Action is set, test 'Alert'. Close in 1 second."),
  },
  {
    modal: "relax",
    header: "Do you want to add this file?",
    text: `Once you add this file, it'll visible for everyone. Are you sure you want to add it?`,
    modalcolor: "rgb(10, 135, 0)",
    procedure: () =>
      console.warn("Action is set, test 'Rlax'. Close in 1 second."),
  },
  {
    modal: "add-card-to-cart",
    header: "Do you want to add this product?",
    text: `Take your time and look our other products, our consultants always ready to answer your questions`,
    modalcolor: "rgb(116, 204, 212)",
    procedure: () =>
      console.warn("Action is set, test 'Rlax'. Close in 1 second."),
  },
  {
    modal: "remove-card",
    header: "Do you want to remove this product?",
    text: `Please, if you're not sure what to choose, try our online support.`,
    modalcolor: "rgb(124, 218, 87)",
    procedure: () =>
      console.warn("Action is set, test 'remove-card'. Close in 1 second."),
  },
  {
    container: "default",
    centred: "true",
    top: "65%",
    borders: "true",
    width: "500px",
  },
  {
    url : {
      products: "./db.json"
    }
  }
];
