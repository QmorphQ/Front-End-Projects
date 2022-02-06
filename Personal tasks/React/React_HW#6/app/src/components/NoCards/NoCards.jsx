import React from "react";
import classes from "./NoCards.module.scss";

export const NoCards = ({text, ...props}) => {

    return(
        <div className={classes["no-cards"]}>{text}</div>
    )
}