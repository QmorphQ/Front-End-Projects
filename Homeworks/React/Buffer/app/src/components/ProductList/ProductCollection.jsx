import React from "react";
//Style:
import collection_classes from "./ProductCollection.module.scss";
//Library:
import PropTypes from "prop-types";

export const ProductCollection = (props) => {
    return (
      <div className={collection_classes.collection} {...props}>
        {props.children}
      </div>
    );
}
