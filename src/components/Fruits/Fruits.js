import React, { Component } from "react";
import classes from "./Fruits.css";
import Checkbox from "../Checkbox";
import Auxiliary from "../../hoc/Auxiliary";

class Fruits extends Component {
  state = {
    disabledFruit: false
  };

  checkboxHandler = () => {
    const doesShow = !this.state.disabledFruit;
    this.setState({ disabledFruit: doesShow }, () => {
      console.log(this.state.disabledFruit);
    });
  };

  render() {
    return this.props.fruits.map(
      ({ id, name, quantity, showFruit, kJ, variety, carbs, price }, index) => {
        return (
          <div className={classes.body}>
            <h1>Product</h1>
            <h1>Quantity</h1>
            <div>
              <Checkbox
                clicked={this.checkboxHandler}
                chck={true}
                value={name}
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

              <button onClick={() => this.props.addHandler(index)} value={id}>
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
