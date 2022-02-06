import React, { useState, useEffect } from "react";
//Components:
import { Card } from "./components/Card/Card";
import { ProductCollection } from "./components/ProductList/ProductCollection";
import { Modal } from "./components/Modal/Modal";
import { TestPanel } from "./TestComponent/TestPanel";
//Configs:
import { configs } from "./data/componentsConfig.js";
//Styles:
import classes_APP from "./scss/App.module.scss";
import "./scss/style.scss";
//---------------------------------------------------------------------------
//===========================================================================
export const App = () => {
  //Pressets:
  
    const [params, setParams] = useState({
      cardName: "",
      modalActive: false,
      modalConfig: {},
      dataList: [],
      loaded: 0,
    })
   
    
  
  //---------------------------------------------------------------------------

  //Methods:
  const getConfig = (data = [], propName, propValue) => {
     return (data.find((configObj) => configObj[propName] === propValue));
  }
  const setModalActive = (value) => {
    return setParams({ modalActive: value });
  }
  function getData(url) {
  fetch(url)
      .then((r) => r.json())
      .then((r) => setParams({ dataList: [...r], loaded: 1 }));
  }
  const addCardToCart = (event) => {
    if (!localStorage.getItem(JSON.stringify(params.cardName))) {
      localStorage.setItem(
        JSON.stringify(params.cardName),
        JSON.stringify(
          params.dataList.find(
            (options) => options.options.Name === params.cardName
          )
        )
      );
    }
  }
  
  //---------------------------------------------------------------------------
  useEffect(() =>  {getData('./db.json')}, [])
  
  while (params.loaded === 0) {
    return <div className={classes_APP.App__loading_screen}>LOADING</div>;
  }
    //DOM;
    //-------------------------------------------------------------------------
    return (
      <div className={classes_APP.App}>
        <TestPanel />
        <Modal
          setCloseBtn
          setActive={setModalActive}
          active={params.modalActive}
          {...params.modalConfig}
          procedure={addCardToCart}
        />
        <ProductCollection>
          {(params.dataList).map((obj) => {
            return (
              <Card
                name="add-card-to-cart"
                btnhandler={(e) => (
                  setParams({
                    modalConfig: getConfig(
                      configs,
                      "modal",
                      e.target.name
                    ),
                  }),
                  setModalActive(true),
                  setParams({ cardName: e.target.id })
                )}
                key={obj.options.Name}
                bgurl={obj.url}
                options={obj.options}
              />
            );
          })}
        </ProductCollection>
      </div>
    );
  
}
//===========================================================================
