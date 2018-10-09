import React, { Component } from 'react';
import './App.css';
import Nav from './ecom-folder/pages/Nav'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./ecom-folder/pages/home/Home";
import Products from "./ecom-folder/pages/products/Products";
import Contact from "./ecom-folder/pages/contact/Contact";
import "./CSS/Styles.css";
import Callback from "./Callback"
import SecuredRoute from "./SecuredRoute";
import Admin from './ecom-folder/pages/admin/admin.js';
import ProductCard from "./ecom-folder/pages/products/ProductCard.js"





class App extends Component {
  constructor() {
    super();

    this.state = {
        products: [],
        hasProducts: false,
        productType:[],
        filteredProducts:[]
    };
    this.callBack = this.callBack.bind(this);
}


componentDidMount() {
    fetch(`http://localhost:3002/products`)
    .then((response) => {
     return response.json();
    })
    .then((data) => {
        // console.log(data);
        this.setState({
            products: data,
            hasProducts: true,
            productType: data,
            filteredProducts: data
        })
    })
};

filterHandler(filter) {
    
 const productsToFilter = [...this.state.products];
 if (filter === "Reset") {
     this.setState({
         filteredProducts : this.state.products
     })
 }
 else {
    const filteredItems = productsToFilter.filter(
        product =>  product.price === filter && product.productType === filter && product.month === filter
    );
    
    this.setState(
        {
            filteredProducts: filteredItems
        }
    )
   
 }
}


callBack = (el) => {                   
    return <ProductCard img={el.productImages}df info={el} key={el.productId}/>;
};


  render() {
    let arrayOfProducts = '';

        if (this.state.hasProducts) {
            arrayOfProducts = this.state.filteredProducts.map(this.callBack)
        }
    return (
      <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/products" render={() => (<Products productType={this.state.productType} arrayOfProducts={arrayOfProducts} filterHandler={filter=>this.filterHandler(filter)}/>)}  />
          <Route path="/Contact" component={Contact} exact/>
          {/* <Route path="/admin" component={Admin}exact/> */}
          <Route exact path='/callback' component={Callback}/>
          <SecuredRoute path='/admin' component={Admin} products={this.state.products}/>
        </Switch> 
        </div>
      </BrowserRouter>
     
    );
  }
}




export default App;
