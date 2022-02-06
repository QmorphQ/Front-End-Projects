import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Components:
import { FavoritesIcon } from "./FavoritesIcon/FavoritesIcon.jsx";
import { Button } from "../Button/Button";
import { CardDescription } from "./CardDescription/CardDescription";
import { addToFavorite, removeFromFavorite } from "../../store/actions/favoriteActionsCreator.js";
//Styles:
import classes from "./Card.module.scss";
import noImg from "./no_image.jpg";
//Library:
import PropTypes from "prop-types";

//===========================================================================
export const Card = ({text, addedToCart, callBackFunc, name, bgurl, options, onClick, ...props }) => {
  //Pressets:
  //-------------------------------------
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite)
  const [cardIsFavorited, setCardIsFavorited] = useState(0);
  const cardParams = {
    url: bgurl,
    options: options,
  };
  //-------------------------------------

  //Methods:
  //-------------------------------------
  function getClassName(elementName) {
    return classes[`card__${elementName}`];
  }
  function addCardToLocalStorage(event) {
    dispatch(addToFavorite(cardParams));
  }
  function removeCardFromLocalStorage() {
    dispatch(removeFromFavorite(cardParams.options.Name))
  }
  function addCardToFavorite() {
     return cardIsFavorited
      ? (setCardIsFavorited(0), removeCardFromLocalStorage())
      : (setCardIsFavorited(1), addCardToLocalStorage());
  }
  useEffect(() => {
    if (favorite.find((e) => e.options.Name === cardParams.options.Name)) {
      return setCardIsFavorited(1);
    }
  }, [cardParams.options.Name, favorite]);

  //-------------------------------------
  
  return (
    <div id={cardParams.options.Name} className={classes.card} {...props}>
      <div className={getClassName("header")} >
        <FavoritesIcon
          onClick={() => {addCardToFavorite();}}
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
          id={cardParams.options.Name}
          text={text}
          className={addedToCart ? getClassName("remove-card-btn") : getClassName("add-card-btn")}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

//===========================================================================
Card.propTypes = {
  bgurl: PropTypes.string,
  options: PropTypes.object,
  name: PropTypes.string,
  btnhandler: PropTypes.func,
};

Card.defaultProps = {
  callBackFunc: () => 0,
  bgurl: `url(${noImg})`,
  options: {
    Name: "none",
    Description: "no description",
    "Vendor code": "none",
    Color: "none",
    Price: "none",
  },
};
