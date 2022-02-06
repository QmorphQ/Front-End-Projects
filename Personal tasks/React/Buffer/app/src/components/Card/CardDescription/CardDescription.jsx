import React from "react";
//Library:
import PropTypes from "prop-types";
//Styles:
import description_classes from "./CardDescription.module.scss";

//======================================================================
export const CardDescription = ({ options, ...args }) => {
  
  const getClassName =(elementName) => {
    return description_classes[`description__${elementName}`];
  }
    return (
      <ul className={description_classes.description} {...args}>
        {Object.entries(options).map((a) => {
          return (
            <li className={getClassName("text")} key={a[0]}>
              <b>{a[0]}:</b> {a[1]}
            </li>
          );
        })}
      </ul>
    );
}
//======================================================================

CardDescription.propTypes = {
  options: PropTypes.object,
};
