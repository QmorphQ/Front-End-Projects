import React, { useState } from "react";
import classes from "./Cart.module.scss";
import { NoCards } from "../NoCards/NoCards";
import { Card } from "../Card/Card";
import { Modal } from "../Modal/Modal";
import { CartForm } from "./CartForm/CartForm";
import { configs } from "../../data/componentsConfig.js";
import { useDispatch } from "react-redux";
import { setModalWindowState } from "../../store/actions/modalActionsCreators";
import { service } from "../../Service/Service";
import { removeFromCart } from "../../store/actions/cartActionsCreator";
import { storage } from "../LocalStorage/LocaleStorage";
//==============================================================
export const Cart = ({cart, ...props }) => {
  const dispatch = useDispatch();
  const [cardName, setCardName] = useState("");
  const [modalConfig, setModalConfig] = useState({});
  const getClassName = (className) => {
    return className === "cart"
      ? classes["cart"] 
      : classes["cart__" + className];
  };
  function removeCardFromCart(event) {
    //+++++++++++++++++++++++++++++++++++++
    dispatch(removeFromCart(cardName));
    //+++++++++++++++++++++++++++++++++++++
  }

  if (cart.length === 0) {
    return <NoCards text="No cards added to cart" />;
  }
  return (
    <div className={getClassName("cart")} {...props}>
      <Modal
        setCloseBtn
        
        {...modalConfig}
        procedure={removeCardFromCart}
      />
      {cart.map((obj) => {
        return (
          <div
            key={"card-container" + obj.options.Name}
            className={getClassName("card-container")}
          >
            <CartForm handler={() => {
              cart.forEach((product) => {
                console.log(product.options.Name);
                dispatch(removeFromCart(product.options.Name))
              })
              storage.storeObserver('cart')
            }} />
            <Card
              addedToCart
              text=""
              name="remove-card"
              onClick={(e) => {
                if (e.target.name === "remove-card") {
                  return (
                    setModalConfig(service.getConfig(configs, "modal", e.target.name)),
                    setCardName(e.target.id),
                    dispatch(setModalWindowState(true))
                  );
                }
              }}
              key={obj.options.Name}
              bgurl={obj.url}
              options={obj.options}
            />
          </div>
        );
      })}
    </div>
  );
};
