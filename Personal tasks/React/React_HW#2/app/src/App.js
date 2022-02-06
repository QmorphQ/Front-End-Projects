import React from "react";
//Components:
import { TestPanel } from "./components/TestComponent/TestPanel";
import { Products } from "./components/Products/Products";
//Styles:
import classes_APP from "./scss/App.module.scss";
import "./scss/style.scss";
//---------------------------------------------------------------------------
//===========================================================================
export default class TestApp extends React.Component {
  //Pressets:
  constructor(props) {
    super(props);
    this.url = "./db.json";
    this.state = {
      dataList: [],
      loaded: 0,
    };
  }
  //---------------------------------------------------------------------------

  getData(url) {
    fetch(url)
      .then((r) => r.json())
      .then((r) => this.setState({ dataList: [...r], loaded: 1 }));
  }
  UNSAFE_componentWillMount() {
    this.getData(this.url);
  }
  //---------------------------------------------------------------------------
  render() {
    
    //=-========================================|
    //localStorage.clear()       //|Testing     |
    //console.log(localStorage); //|LocalStorage|
    //==========================================

    while (this.state.loaded === 0) {
      return <div className={classes_APP.loading_screen}>LOADING</div>;
    }
    return (
      <div className="App">
        <TestPanel />
        <Products datalist={this.state.dataList} />
      </div>
    );
  }
}
//===========================================================================
