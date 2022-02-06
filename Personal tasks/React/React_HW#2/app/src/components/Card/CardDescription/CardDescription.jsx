import React from "react";
//Library:
import PropTypes from "prop-types";
//Styles:
import description_classes from "./CardDescription.module.scss";

//======================================================================
export class CardDescription extends React.Component {
  constructor(props) {
    super(props);
    this.optionsOfCardDescription = Object.entries(this.props.options);
  }
  getClassName(elementName) {
    return description_classes[`description__${elementName}`];
  }

  render() {
    return (
      <ul className={description_classes.description} {...this.props}>
        {this.optionsOfCardDescription.map((a) => {
          return (
            <li className={this.getClassName("text")} key={a[0]}>
              <b>{a[0]}:</b> {a[1]}
            </li>
          );
        })}
      </ul>
    );
  }
}
//======================================================================

CardDescription.propTypes = {
  options: PropTypes.object,
};
