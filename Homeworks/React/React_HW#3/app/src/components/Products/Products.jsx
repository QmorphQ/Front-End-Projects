import React, { useState } from "react";
import collection_classes from "./Products.module.scss";
import { Card } from "../Card/Card";
import { Modal } from "../Modal/Modal";
import { storage } from "../LocalStorage/LocaleStorage.js";
import { service } from "../../Service/Service";

export const Products = ({ datalist, ...props }) => {
  const [cardName, setCardName] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [modalConfig, setModalConfig] = useState({});
  //Methods:
  function addCardToCart(event) {
    if (
      !storage.getItemFromSection("Added to Cart", "options", "Name", cardName)
    ) {
      storage.addNewItemInSection(
        "Added to Cart",
        datalist.find((item) => item.options.Name === cardName)
      );
    }
  }

  return (
    <div className={collection_classes.collection} {...props}>
      <Modal
        setCloseBtn
        setActive={setModalActive}
        active={modalActive}
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
