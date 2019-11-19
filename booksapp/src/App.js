import React, { Component } from 'react';
import  Aside from '../src/modules/Aside';
import Footer from '../src/modules/Footer';
import Header from '../src/modules/Header'
import ComponentX from '../src/modules/ComponentX'
import ComponentY from '../src/modules/ComponentY'
import ComponentZ from '../src/modules/ComponentZ'
// import SearchSection from './modules/SearchSection'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import listingsData from './Data/Database'
import Filter from './modules/Filter'
import Listings from './modules/Listing'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      // genere : '',
      listingsData,
      range:1,
      filteredData: listingsData
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)

  }
  change(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState ({
      [name]:value
    }, ()=> {
      console.log(this.state)
      this.filteredData();
    })
  }

  filteredData() {
    const newData = this.state.listingsData.filter((item) => {
      return item.radius <= this.state.range || item.genere == this.state.genere && this.state.genere == 'any' && item.radius <= this.state.range
    })
    this.setState({
      filteredData: newData
    })
  }

  render() {
    
  return (
    
    <Router>     
      <div className="App">
      
        <Header style={{position:"sticky", top:"0px"}} />
        <Aside />
        {/* <Switch>
          <Route path="/x" exact component={ComponentX} />
          <Route path="/y" exact component={ComponentY} />
          <Route path="/z" exact component={ComponentZ} />
          <Route path="/search" exact component={SearchSection}  />
        </Switch> */}
        {/* <SearchSection listingsData = {this.state.listingsData} /> */}
        <section id="content-area">
          <Filter change={this.change} globalState= {this.state} />
          <Listings listingsData= {this.state.filteredData} />
        </section>
        <div className="clear"></div>
        <Footer />
      </div>
      </Router> 
  );
  }
}




