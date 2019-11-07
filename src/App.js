import React, { Component } from "react";
import classes from "./App.css";
import Fruits from "./components/Fruits/Fruits";

import banana from "./assets/banana.png";

import shoppingcart from "./assets/shoppingcart.jpg";

import apple from "./assets/apple.jpg";
import strawberry from "./assets/strawberry.jpg";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Logo from "./components/Logo/Logo";
import Auxiliary from "./hoc/Auxiliary";
import Toolbar from './components/Toolbar/Toolbar';

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
        disabled:false
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
        disabled:false
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
        disabled:false
      }
    ],
    title: "The fruit shop",
    totalPrice: 0,
    
  };

  addHandler = index => {
    const fruits = [...this.state.fruits];
    fruits[index].quantity++;
    this.setState({ fruits });
    this.totalPriceUpdater(fruits);
  };
  totalPriceUpdater=(fruits)=>{
    const oldPrice=this.state.totalPrice;
  
    const sum =Object.keys(fruits)
    .map(fKey=>{
      return fruits[fKey].price*fruits[fKey].quantity;
    }
      
      ).reduce((sum,el)=>{
        return sum+el;
      },0);
    this.setState({totalPrice:sum});
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
  

  render() {
    return (
      <div className={classes.App}>
        <Toolbar
        title='The fruit shop'
        />
      

        <table align="center">
          
          <tbody>
            <Fruits
              fruits={this.state.fruits}
              addHandler={this.addHandler.bind(this)}
              detailHandler={this.detailHandler.bind(this)}
              
            />
          </tbody>
        </table>

        <Auxiliary>
          <ShoppingCart
            title='Total amount in € to pay'
            fruits={this.state.fruits}
            totalPrice={this.state.totalPrice}
          ></ShoppingCart>
        </Auxiliary>
       
       
      
      </div>
    );
  }
}

export default App;
