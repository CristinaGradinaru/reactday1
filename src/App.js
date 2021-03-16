import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './views/About'
import Contact from './views/Contact'
import Home from './views/Home'

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      name: 'Cristina Gradinaru',
      racers: [],
      contact: ['Cristina Gradinaru', '6789876543', '677 First str. Arlington Heights, IL']
    }
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
  render() {
    return (
      <div>
        <Navbar />
        
        Hello world
        <main className="container">
          <Switch>
            <Route exact path="/" render={()=> <Home name={this.state.name} racers={this.state.racers} handleSubmit={this.handleSubmit} />}/>
            <Route path="/about" render={ ()=> <About name={this.state.name} />}/>
            <Route path="/contact" render={ ()=> <Contact name={this.state.name} contact={this.state.contact}/>}/>
          </Switch>
        </main>
      </div>
    )
  }
}
