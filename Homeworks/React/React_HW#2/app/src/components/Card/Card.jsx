import React from "react";
//Components:
import { FavoritesIcon } from "./FavoritesIcon/FavoritesIcon.jsx";
import { Button } from "../Button/Button";
import { CardDescription } from "./CardDescription/CardDescription";
import { storage } from "../LocalStorage/LocaleStorage.js";
//Styles:
import classes from "./Card.module.scss";
import noImg from "./no_image.jpg";
//Library:
import PropTypes from "prop-types";

//===========================================================================
export class Card extends React.Component {
  //Pressets:
  //-------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      cardIsFavorited: 0,
      card_presset: {
        url: this.props.bgurl,
        options: this.props.options,
      },
    };
    this.cardAdress = [
      "favorited",
      "options",
      "Name",
      this.state.card_presset.options.Name,
    ];
    this.setCardFavorited = this.setCardFavorited.bind(this);
    this.addCardToFavorite = this.addCardToFavorite.bind(this);
  }
  //-------------------------------------

  //Methods:
  //-------------------------------------
  getClassName(elementName) {
    return classes[`card__${elementName}`];
  }
  setCardFavorited() {
    this.state.cardIsFavorited
      ? this.setState({ cardIsFavorited: 0 })
      : this.setState({ cardIsFavorited: 1 });
  }
  addCardToLocalStorage(event) {
    if (!storage.getItemFromSection(...this.cardAdress)) {
      storage.addNewItemInSection("favorited", this.state.card_presset);
    }
  }
  removeCardFromLocalStorage() {
    if (storage.getItemFromSection(...this.cardAdress)) {
      storage.removeItemFromSection(...this.cardAdress);
    }
  }
  addCardToFavorite() {
    return this.state.cardIsFavorited
      ? (this.setState({ cardIsFavorited: 0 }),
        this.removeCardFromLocalStorage())
      : (this.setState({ cardIsFavorited: 1 }), this.addCardToLocalStorage());
  }
  componentDidMount() {
    if (storage.getItemFromSection(...this.cardAdress)) {
      return this.setState({ cardIsFavorited: 1 });
    }
  }

  //-------------------------------------

  render() {
    return (
      <div
        id={this.state.card_presset.options.Name}
        className={classes.card}
        {...this.props}
      >
        <div className={this.getClassName("header")}>
          <FavoritesIcon
            onClick={this.addCardToFavorite}
            favorite={this.state.cardIsFavorited}
            className={this.getClassName("favorites_position")}
          />
        </div>
        <div className={this.getClassName("main")}>
          <div
            className={this.getClassName("main-img")}
            style={{ backgroundImage: this.props.bgurl }}
          ></div>
          <CardDescription options={this.props.options} />
        </div>
        <div className={this.getClassName("footer")}>
          <Button
            name={this.props.name}
            id={this.state.card_presset.options.Name}
            text="Add to cart"
            className={this.getClassName("add-card-btn")}
            onClick={this.props.onClick}
          />
        </div>
      </div>
    );
  }
}

//===========================================================================
Card.propTypes = {
  bgurl: PropTypes.string,
  options: PropTypes.object,
  name: PropTypes.string,
  btnhandler: PropTypes.func,
};

Card.defaultProps = {
  bgurl: `url(${noImg})`,
  options: {
    Name: "none",
    Description: "no description",
    "Vendor code": "none",
    Color: "none",
    Price: "none",
  },
};
