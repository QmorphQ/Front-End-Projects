import React from "react";
import { TestPanel } from "./TestComponent/TestPanel";
//Styles:
import classes from "./scss/Test.module.scss";

export default function Test() {
    return(
        <div className={classes.Test}>
            <TestPanel />
        </div>
    )
}