import React from "react";
import collection_classes from "./Products.module.scss";
import { Card } from "../Card/Card";
import { Modal } from "../Modal/Modal";
import { storage } from "../LocalStorage/LocaleStorage.js";
//Configs:
import { configs } from "../../data/componentsConfig.js";

export class Products extends React.Component {
  constructor(props) {
    super(props);
    this.configs = configs;
    this.state = {
      cardName: "",
      modalActive: false,
      modalConfig: {},
    };
    this.cardAddedToCardAdress = ["Added to Cart", "options", "Name"];
    this.addCardToCart = this.addCardToCart.bind(this);
  }
  //Methods:
  getConfig(data = [], propName, propValue) {
    let config = data.find((configObj) => configObj[propName] === propValue);

    return config;
  }
  setModalActive(value) {
    return this.setState({ modalActive: value });
  }
  addCardToCart(event) {
    if (
      !storage.getItemFromSection(
        "Added to Cart",
        "options",
        "Name",
        this.state.cardName
      )
    ) {
       storage.addNewItemInSection("Added to Cart", this.props.datalist.find((item) => item.options.Name === this.state.cardName))
    }
  }
  
  render() {
    return (
      <div className={collection_classes.collection} {...this.props}>
        <Modal
          setCloseBtn
          setActive={this.setModalActive.bind(this)}
          active={this.state.modalActive}
          {...this.state.modalConfig}
          procedure={this.addCardToCart}
        />
        {this.props.datalist.map((obj) => {
          return (
            <Card
              name="add-card-to-cart"
              onClick={(e) => {
                if (e.target.name === "add-card-to-cart") {
                  return (
                    this.setState({
                      modalConfig: this.getConfig(
                        this.configs,
                        "modal",
                        e.target.name
                      ),
                      cardName: e.target.id,
                    }),
                    this.setModalActive(true)
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
  }
}
