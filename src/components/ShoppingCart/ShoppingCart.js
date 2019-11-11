import React from "react";
import Logo from "../Logo/Logo";
import classes from "../Logo/Logo.css";

const ShoppingCart = props => (
  <div>
    <div className={classes.Logo}>
      {" "}
      <Logo />
      <p>{props.title}</p>
      <p>Total: € :{props.totalPrice.toFixed(2)}</p>
      {props.fruits.map(({ title, name, quantity, price, id, disabled }) => {
        return (
          <div key={id} className={classes.Logo}>
            <h1>{title}</h1>
            {!disabled && (
              <p>
                {name} : € {(quantity * price).toFixed(2)}
              </p>
            )}
          </div>
        );
      })}{" "}
    </div>
  </div>
);

export default ShoppingCart;
