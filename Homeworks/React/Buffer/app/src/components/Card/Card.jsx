import React, {useEffect, useState} from "react";
//Components:
import { FavoritesIcon } from "./FavoritesIcon/FavoritesIcon.jsx";
import { Button } from "../Button/Button";
import { CardDescription } from "./CardDescription/CardDescription";
import classes from "./Card.module.scss";
//Styles:
import noImg from "./no_image.jpg";
//Library:
import PropTypes from "prop-types";

//===========================================================================
export const Card = ({name, bgurl, options, btnhandler, ...args}) => {
    const [cardIsFavorited, setCardIsFavorited] = useState(0);
    //================================================
    //Methods:

    //Service:
    //-------------------------------------------
    const cardParams = () => {
     return {url: bgurl,
            options: options,}
    };
    function getClassName(elementName) {
      return classes[`card__${elementName}`];
    };
    function addFavoritedToLocalStorage(event) {
        localStorage.setItem(
          JSON.stringify("Favorited " + cardParams().options.Name),
          JSON.stringify(cardParams())
        );
    };
    function removeFavoritedFromLocalStorage() {
        localStorage.removeItem(
          JSON.stringify("Favorited " + cardParams().options.Name)
        );
    };
    //-------------------------------------------

    //Main logic:
    //-------------------------------------------
    function cardToggleFavorite() {
     return cardIsFavorited ?
        (setCardIsFavorited(0),
        removeFavoritedFromLocalStorage()) : 
        (setCardIsFavorited(1),
        addFavoritedToLocalStorage());
      }
    
    //-------------------------------------------
    useEffect(() => {
      if (localStorage.getItem(JSON.stringify("Favorited " + cardParams().options.Name)))
      setCardIsFavorited(1);
    }
    );
    //================================================
    return (
      <div
      id={cardParams().options.Name}
      className={classes.card}
      {...args}
    >
      <div className={getClassName("header")}>
        <FavoritesIcon
          onClick={cardToggleFavorite}
          favorite={cardIsFavorited}
          className={getClassName("favorites_position")}
        />
      </div>
      <div className={getClassName("main")}>
        <div
          className={getClassName("main-img")}
          style={{ backgroundImage: bgurl }}
        ></div>
        <CardDescription options={options} />
      </div>
      <div className={getClassName("footer")}>
        <Button
          name={name}
          id={cardParams().options.Name}
          text="Add to cart"
          className={getClassName("add-card-btn")}
          onClick={btnhandler}
        />
      </div>
    </div>
    )
  
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
