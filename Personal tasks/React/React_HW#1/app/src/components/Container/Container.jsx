import React from "react";
import classes from "./Container.module.scss";

//===========================================================================
export class Container extends React.Component {

  //Pressets:
  //------------------------------------
  constructor(props) {
    super(props);
    this.className = classes.container;
   
  }
  //------------------------------------

  //Methods:
  //------------------------------------
  setCenteredPosition (value = false) {
      if (value) {
        return {
      position: "absolute",
      top: this.props.top || "50%",
      left: this.props.left || "50%",
      transform: "translate(-50%, -50%)",
    }
  } 
  }
  setBorders (value = false) {
    if (value) {
      return {
        border: "rgb(15, 189, 189) 6px solid",
        borderRadius: "10px",
        borderStyle: "double",
  }
} 
  }
  //------------------------------------
  render() {
    
    return (
      <div
        className={this.className}
        style={{
          ...this.setCenteredPosition(this.props.centred),
          ...this.setBorders(this.props.borders),
          width: this.props.width || "50%",
          height: this.props.height || "auto",
          justifyContent: this.props.justifyContent || "space-between",
          alignItems: this.props.alignItems || "center",
        }}
        {...this.props}
      >
        {this.props.children}
      </div>
    );
  }
}


