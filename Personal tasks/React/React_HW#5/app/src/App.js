import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { storage } from "./components/LocalStorage/LocaleStorage";
//Components:
import { TestPanel } from "./components/TestComponent/TestPanel";
import { Header } from "./components/PageComponents/Header/Header";
import { Products } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";
import { Favorited } from "./components/Favotited/Favorited";
import { store } from "./store/index";
import { fetchProducts } from "./store/actions/productsActionsCreators";
import { useDispatch, useSelector } from "react-redux";
//Styles:
import classes_APP from "./scss/App.module.scss";
import "./scss/style.scss";
//---------------------------------------------------------------------------
//===========================================================================

export const App = (props) => {
  //Pressets:
  const dispatch = useDispatch();
  const productsReady = useSelector(state => state.productsList.products_fetched);
  const products = useSelector(state => state.productsList.products);
  const favorite = useSelector(state => state.favorite);
  const cart = useSelector(state => state.cart);
  //---------------------------------------------------------------------------


  useEffect(() => {
    if (!productsReady) {dispatch(fetchProducts())};
    storage.storeObserver(favorite, cart)
  }, [productsReady, dispatch, favorite, cart]);
  //---------------------------------------------------------------------------
  if (!productsReady) {
    return <div className={classes_APP.loading_screen}>LOADING</div>;
  }
  return (
    <div className="App">
      <Header
        options={[
          ["Products", "/"],
          ["Cart", "/cart"],
          ["Favorited", "/favorited"],
        ]}
      />
      <TestPanel />
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Products datalist={products} cart={cart} favorite={favorite} />} />
        <Route path="/cart" element={<Cart datalist={products} cart={cart} favorite={favorite}/>} />
        <Route path="/favorited" element={<Favorited datalist={products} cart={cart} favorite={favorite} />} />
      </Routes>
      </Provider>
    </div>
  );
};
//===========================================================================
