import React, { Component } from "react";
import classes from "./Fruits.css";
import Checkbox from "../Checkbox";

class Fruits extends Component {
  render() {
    return this.props.fruits.map(
      (
        { id, name, quantity, showFruit, kJ, variety, carbs, price, disabled },
        index
      ) => {
        return (
          <div className={classes.body}>
            <h1>Product</h1>
            <h1>Quantity</h1>
            <div>
              <Checkbox
                id={id}
                chck={!disabled}
                value={name}
                index={index}
                clicked={() => this.props.checkboxHandler(index)}
              />
              <strong>
                <p>I am the {name}</p>
              </strong>
              <img
                className={classes.body}
                src={require("../../assets/" +
                  name +
                  (name === "banana" ? ".png" : ".jpg"))}
                onClick={() => this.props.detailHandler(index)}
              />
            </div>
            <div>
              <strong>
                <p className={classes.text}>{quantity}</p>
              </strong>
              <button
                onClick={() => this.props.addHandler(index)}
                key={id}
                name={index}
                disabled={disabled}
              >
                Add one more
              </button>
            </div>
            {showFruit && (
              <tr>
                {" "}
                <ul className={classes.ul}>
                  <li>price:{price}</li>
                  <li>carbs:{carbs}</li>
                  <li>variety:{variety}</li>
                  <li>kJ:{kJ}</li>
                </ul>
              </tr>
            )}
          </div>
        );
      }
    );
  }
}
export default Fruits;
