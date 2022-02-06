import React, { useState } from "react";
import classes from "./Favorited.module.scss";
import { Card } from "../Card/Card";
import { Modal } from "../Modal/Modal";
import { NoCards } from "../NoCards/NoCards";
import { useDispatch } from "react-redux";
import { setModalWindowState } from "../../store/actions/modalActionsCreators";
import { service } from "../../Service/Service";
import { addToCart } from "../../store/actions/cartActionsCreator";
//Configs:
import { configs } from "../../data/componentsConfig.js";


export const Favorited = ({datalist, favorite, cart,...props }) => {
  const dispatch = useDispatch();
  const [cardName, setCardName] = useState("");
  const [modalConfig, setModalConfig] = useState({});

  const getClassName = (className) => {
    return className === "favorited"
      ? classes["favorited"]
      : classes["favorited__" + className];
  };
  function addCardToCart(event) {
    if (
      !cart.find((e) => e.options.Name === cardName)
    ) {
     dispatch(addToCart(datalist.find((e) => e.options.Name === cardName)))
    }
  }

  if (favorite.length === 0) {
    return <NoCards text="No cards added to favorited" />;
  }
  return (
    <div className={getClassName("favorited")} {...props}>
      <Modal
        setCloseBtn
        {...modalConfig}
        procedure={addCardToCart}
      />
      {favorite.map((obj) => {
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
