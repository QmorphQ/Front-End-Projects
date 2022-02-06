//Imports:
//==============================================================
import React from "react";

//Components:
import { Button } from "./components/Button/Button";
import { Container } from "./components/Container/Container";
import { Modal } from "./components/Modal/Modal";

//Data:
import { configs } from "./data/componentsConfig";

//Style:
import "./style.scss";
//==============================================================

//App:
//---------------------------------------------------------------------------
class App extends React.Component {
  constructor(props) {
    //Pressets:
    //-----------------------------------------------------------------------
    super(props);
    this.configs = configs;
    this.state = {
      modalActive: false,
      modalConfig: this.getConfig(this.configs, "modalconfig", "default"),
      containerConfig: this.getConfig(this.configs, "container", "default"),
      btnConfig: {
        alert: this.getConfig(this.configs, "btn", "alert"),
        relax: this.getConfig(this.configs, "btn", "relax"),
      },
    };
    //-----------------------------------------------------------------------
  }

  //Methods:
  //-------------------------------------------------------------------------
  getConfig(data = [], propName, propValue) {
    let config = data.find((configObj) => configObj[propName] === propValue);

    return config;
  }
  setModalActive(value) {
    return this.setState({ modalActive: value });
  }
  //-------------------------------------------------------------------------

  render() {
    return (
      <div className="App">
        <Modal
          setCloseBtn
          setActive={this.setModalActive.bind(this)}
          active={this.state.modalActive}
          {...this.state.modalConfig}
        />

        <Container {...this.state.containerConfig}>
          <Button
            name="alert"
            onClick={(e) => (
              this.setState({
                modalConfig: this.getConfig(
                  this.configs,
                  "modal",
                  e.target.name
                ),
              }),
              this.setModalActive(true)
            )}
            {...this.state.btnConfig.alert}
          ></Button>

          <Button
            name="relax"
            onClick={(e) => (
              this.setState({
                modalConfig: this.getConfig(
                  this.configs,
                  "modal",
                  e.target.name
                ),
              }),
              this.setModalActive(true)
            )}
            {...this.state.btnConfig.relax}
          ></Button>
        </Container>
      </div>
    );
  }
}
//-------------------------------------------------------------------------

export default App;
