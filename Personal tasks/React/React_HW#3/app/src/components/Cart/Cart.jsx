import React, { useEffect, useState } from "react";
import classes from "./Cart.module.scss";
import { NoCards } from "../NoCards/NoCards";
import { storage } from "../LocalStorage/LocaleStorage";
import { Card } from "../Card/Card";
import { Modal } from "../Modal/Modal";
import { service } from "../../Service/Service";

export const Cart = ({ ...props }) => {
  const [addedToCartList, setAddedToCartList] = useState([]);
  const [cardName, setCardName] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [modalConfig, setModalConfig] = useState({});
  const cardAdress = ["Added to Cart", "options", "Name", cardName];
  const getClassName = (className) => {
    return className === "cart"
      ? classes["cart"]
      : classes["cart__" + className];
  };
  
  function removeCardFromCart(event) {
    storage.removeItemFromSection(...cardAdress);
    setAddedToCartList(storage.getData("Added to Cart"));
  }

  useEffect(() => {
    setAddedToCartList(storage.getData("Added to Cart"));
  }, []);

  if (!addedToCartList) {
    return <NoCards text="No cards added to cart" />;
  }
  return (
    <div className={getClassName("cart")} {...props}>
      <Modal
        setCloseBtn
        setActive={setModalActive}
        active={modalActive}
        {...modalConfig}
        procedure={removeCardFromCart}
      />
      {addedToCartList.map((obj) => {
        return (
          <div
            key={"card-container" + obj.options.Name}
            className={getClassName("card-container")}
          >
            <Card
              addedToCart
              text=""
              name="remove-card"
              onClick={(e) => {
                if (e.target.name === "remove-card") {
                  return (
                    setModalConfig(service.getConfig("modal", e.target.name)),
                    setCardName(e.target.id),
                    setModalActive(true)
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
