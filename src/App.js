import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './views/About'
import Contact from './views/Contact'
import Home from './views/Home'
import Shop from './views/Shop'
import Cart from './views/Cart'
import ProductDetail from './views/ProductDetail'
import Posts from './views/Posts'
import PostDetails from './views/PostDetails'

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      name: 'Cristina Gradinaru',
      racers: [],
      cart: [],
      contact: ['Cristina Gradinaru', '6789876543', '677 First str. Arlington Heights, IL'],
      posts:[]
    }
  }

  addToCart= (product) => {
    this.setState(
    {
      cart: this.state.cart.concat(product)
    }
    )
  }

  removeFromCart = (product)=>{
    let newCart = [...this.state.cart]
    for (let i =0; i <newCart.length; i++){
      if (product.id === newCart[i].id){
        newCart.splice(i,1)
        break;
      }
    }
    this.setState(
      {
        cart: newCart
      }
    )
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    let year = e.target.year.value;
    let season = e.target.season.value;
    fetch(`https://ergast.com/api/f1/${year}/${season}/driverStandings.json` )
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            this.setState({
                racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            })
        })
        .catch(error => console.log(error))
}
  sumCartProducts = aList =>{
      let total = 0;
      for (let i=0; i< aList.length; i++){
          total+= aList[i].price
      }
      return total.toFixed(2)
    }

  render() {
    return (
      <div>
        <Navbar cart = {this.state.cart} sumCartProducts={this.sumCartProducts}/>
        
        Hello world
        <main className="container">
          <Switch>
            <Route exact path="/" render={()=> <Home name={this.state.name} racers={this.state.racers} handleSubmit={this.handleSubmit} />}/>
            <Route exact path="/about" render={()=> <About name={this.state.name} />}/>
            <Route exact path="/contact" render={()=> <Contact name={this.state.name} contact={this.state.contact}/>}/>
            <Route exact path="/shop" render={()=> <Shop addToCart={this.addToCart}/>}/>
            <Route exact path="/cart" render={()=> <Cart cart={this.state.cart} sumCartProducts={this.sumCartProducts} removeFromCart={this.removeFromCart}/>}/>
            <Route exact path="/shop/:id" render={({match})=> <ProductDetail match = {match} addToCart={this.addToCart}/>}/>          
            <Route exact path="/posts" render={()=> <Posts posts = {this.state.posts}/>}/>
            <Route exact path="/posts/:id" render={({match})=> <PostDetails match = {match} posts = {this.state.posts}/>}/>          
          </Switch>
        </main>
      </div>
    )
  }
}
