import React, { useState } from "react";
import collection_classes from "./Products.module.scss";
import { Card } from "../Card/Card";
import { Modal } from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { setModalWindowState } from "../../store/actions/modalActionsCreators";
import { service } from "../../Service/Service";
//Configs:
import { configs } from "../../data/componentsConfig.js";
import { addToCart } from "../../store/actions/cartActionsCreator";

export const Products = ({ datalist, cart,  ...props }) => {
  const dispatch = useDispatch();
  const [cardName, setCardName] = useState("");
  const [modalConfig, setModalConfig] = useState({});
  //Methods:
  function addCardToCart(event) {
    if (
      !cart.find((e) => e.options.Name === cardName)
    ) {
     dispatch(addToCart(datalist.find(e => e.options.Name === cardName)))
    }
  }
  
  return (
    <div className={collection_classes.collection} {...props}>
      <Modal
        setCloseBtn
        {...modalConfig}
        procedure={addCardToCart}
      />
      {datalist.map((obj) => {
        return (
          <Card
            text="Add to cart"
            name="add-card-to-cart"
            onClick={(e) => {
              if (e.target.name === "add-card-to-cart") {
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
        );
      })}
    </div>
  );
};
