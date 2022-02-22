import background from "../../Source/Images/background1.jpg";

const styles = {
  LayoutContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "98vh",
    overflow: "hidden",
  },
  Header: {
    flexGrow: "1",
    height: "10%",
  },
  Page: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    background: `url(${background})`,
    backgroundSize: `cover`,
    backgroundColor: "#5273c7",
    backgroundPosition: `center`,
  },
  Footer: {
    flexGrow: "1",
    height: "10%",
  },
};

export default styles;
