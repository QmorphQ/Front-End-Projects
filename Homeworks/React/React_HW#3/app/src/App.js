import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
//Components:
import { TestPanel } from "./components/TestComponent/TestPanel";
import { Header } from "./components/PageComponents/Header/Header";
import { Products } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";
import { Favorited } from "./components/Favotited/Favorited";
import { globalContext } from "./components/context";
//Styles:
import classes_APP from "./scss/App.module.scss";
import "./scss/style.scss";
import { service } from "./Service/Service";
//---------------------------------------------------------------------------
//===========================================================================
export const App = (props) => {
  //Pressets:
  const [dataList, setDataList] = useState([]);
  //---------------------------------------------------------------------------
  useEffect(() => {
    if (!dataList.length)
   service.fetchData(service.getConfig('url', '/products'))
   .then((r) => {
    setDataList([...r]);
   });
  }, [dataList.length]);

  //---------------------------------------------------------------------------
  if (!dataList.length) {
    return <div className={classes_APP.loading_screen}>LOADING</div>;
  }
  return (
    <React.StrictMode>
      <globalContext.Provider value={{
      
      }}>
    <div className="App">
      <Header
        options={[
          ["Products", "/"],
          ["Cart", "/cart"],
          ["Favorited", "/favorited"],
        ]}
      />
      <TestPanel />
      <Routes>
        <Route path="/" element={<Products datalist={dataList} />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/favorited"
          element={<Favorited />}
        />
      </Routes>
    </div>
    </globalContext.Provider>
    </React.StrictMode>
  );
};
//===========================================================================
