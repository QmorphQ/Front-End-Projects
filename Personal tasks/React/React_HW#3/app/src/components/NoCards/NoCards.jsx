import React from "react";
import classes from "./NoCards.module.scss";

export const NoCards = ({text}) => {

    return(
        <div className={classes["no-cards"]}>{text}</div>
    )
}