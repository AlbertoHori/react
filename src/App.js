import React, { Component } from "react";
import classes from "./App.css";
import Fruits from "./components/Fruits/Fruits";
import banana from "./assets/banana.png";
import apple from "./assets/apple.jpg";
import strawberry from "./assets/strawberry.jpg";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import axios from '../src/Axios';
import Toolbar from "./components/Toolbar/Toolbar";

class App extends Component {
  state = {
    fruits: [
      {
        id: "sgs",
        name: "apple",
        quantity: 0,
        price: 0.5,
        pic: { apple },
        showFruit: false,
        kJ: 3,
        variety: "delicious",
        carbs: 120,
        disabled: false
      },
      {
        id: "sdgs",
        name: "banana",
        quantity: 0,
        price: 0.4,
        pic: { banana },
        showFruit: false,
        kJ: 80,
        variety: "dwarf cavendish",
        carbs: 180,
        disabled: false
      },
      {
        id: "bbbs",
        name: "strawberry",
        quantity: 0,
        price: 1.3,
        pic: { strawberry },
        showFruit: false,
        kJ: 60,
        variety: "earliglow",
        carbs: 55,
        disabled: false
      }
    ],
    title: "The fruit shop",
    totalPrice: 0,
    show:true
  };

  addHandler = index => {
    const fruits = [...this.state.fruits];
    fruits[index].quantity++;
    this.setState({fruits}, ()=>this.totalPriceUpdater(fruits));
  };

  totalPriceUpdater = fruits => {
    const sum = Object.keys(fruits)
      .map(fKey => {
        return !fruits[fKey].disabled?fruits[fKey].price * fruits[fKey].quantity:0;
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ totalPrice: sum });
  };

  detailHandler = index => {
    const fruits = [...this.state.fruits];
    const doesShow = !fruits[index].showFruit;
    fruits[index].showFruit = doesShow;
    this.setState(
      {
        fruits: fruits
      },
      () => {
        console.table(this.state.fruits);
      }
    );
  };


  checkboxHandler = index => {
    const fruits = [...this.state.fruits];
    fruits[index].disabled = !fruits[index].disabled;
    this.setState({ fruits }, () => {
      this.totalPriceUpdater(fruits);
    });
 
    
  };

  purchaseHandler=()=>{
    const order = {
     fruits: this.state.fruits,
      price: this.state.totalPrice,
      customer: {
        name: "Ning Testperson",
        address: {
          street: "Teststrasse",
          zipCode: "65818",
          country: "Germany"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders2.json", order)
      .then(response => {
        this.setState({
          show:false});
      })
      .catch(error => {
        console.log('something is wrong');
      });
  }

  render() {
    return (
      <div className={classes.App}>
        <Toolbar title="The fruit shop" />
      {show && (
      <table align="center">
          <tbody>
            <Fruits
              fruits={this.state.fruits}
              addHandler={this.addHandler.bind(this)}
              detailHandler={this.detailHandler.bind(this)}
              checkboxHandler={this.checkboxHandler.bind(this)}
            />
          </tbody>
        </table>  )} 
        {show && (<ShoppingCart
          title="Total amount in € to pay"
          fruits={this.state.fruits}
          totalPrice={this.state.totalPrice}
        ></ShoppingCart>)
        }
      <button onClick={this.purchaseHandler}>Buy now!</button>  
      </div>
    );
  }
}

export default App;
