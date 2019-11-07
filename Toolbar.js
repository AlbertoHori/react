import React from "react";
import fruits from '../../assets/fruits.jpg'
import classes from "../Toolbar/Toolbar.css";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <div> {props.title}</div>
    <div className={classes.Logo}> <img src={fruits}/></div>
  </header>
);

export default Toolbar;
