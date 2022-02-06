import React, { useState, useEffect } from "react";
import classes from "./Favorited.module.scss";
import { Card } from "../Card/Card";
import { Modal } from "../Modal/Modal";
import { NoCards } from "../NoCards/NoCards";
import { storage } from "../LocalStorage/LocaleStorage.js";
import { service } from "../../Service/Service";


export const Favorited = ({ ...props }) => {
  const [favoritedList, setFavoritedList] = useState([]);
  const [cardName, setCardName] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [modalConfig, setModalConfig] = useState({});

  const getClassName = (className) => {
    return className === "favorited"
      ? classes["favorited"]
      : classes["favorited__" + className];
  };
  function addCardToCart(event) {
    if (
      !storage.getItemFromSection("Added to Cart", "options", "Name", cardName)
    ) {
      storage.addNewItemInSection(
        "Added to Cart",
        favoritedList.find((item) => item.options.Name === cardName)
      );
    }
  }

  function updateListOfFavorited() {
    setFavoritedList(storage.getData("favorited"));
  }

  useEffect(() => {
    setFavoritedList(storage.getData("favorited"));
  }, []);
  if (!favoritedList) {
    return <NoCards text="No cards added to favorited" />;
  }
  return (
    <div className={getClassName("favorited")} {...props}>
      <Modal
        setCloseBtn
        setActive={setModalActive}
        active={modalActive}
        {...modalConfig}
        procedure={addCardToCart}
      />
      {favoritedList.map((obj) => {
        return (
          <Card
            text="Add to cart"
            name="add-card-to-cart"
            callBackFunc={updateListOfFavorited}
            onClick={(e) => {
              if (e.target.name === "add-card-to-cart") {
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
        );
      })}
    </div>
  );
};
