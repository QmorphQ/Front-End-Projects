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
    modal: "default",
    header: "Test 'Header'",
    text: "Test 'Body'",
    modalcolor: "rgb(163, 163, 163)",
    procedure: () => console.warn("Action is set, test 'Default'"),
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
    container: "default",
    centred: "true",
    top: "65%",
    borders: "true",
    width: "500px",
  },
];
