import React from "react";
//Style:
import navMenu_classes from "./NavMenu.module.scss";
//Library:
import PropTypes from "prop-types";


const NavOption = ( <li className={navMenu_classes.nav_option}></li>);


export const NavMenu = (props) => {
    return (
        <ul className={navMenu_classes.nav_menu}><NavOption /></ul>
    )
}
