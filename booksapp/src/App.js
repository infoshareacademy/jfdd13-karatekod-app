import React, { Component } from 'react';
import  Aside from '../src/modules/Aside';
import Footer from '../src/modules/Footer';
import Header from '../src/modules/Header'
import ComponentX from '../src/modules/ComponentX'
import ComponentY from '../src/modules/ComponentY'
import ComponentZ from '../src/modules/ComponentZ'
import SearchSection from './modules/SearchSection'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import listingsData from './Data/Database'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "bookswaap",
      listingsData,
    }
  }

  render() {
    
  return (
    
    <Router>     
      <div className="App">
      
        <Header style={{position:"sticky", top:"0px,", zIndex:"10"}} />
        <Aside />
        {/* <Switch>
          <Route path="/x" exact component={ComponentX} />
          <Route path="/y" exact component={ComponentY} />
          <Route path="/z" exact component={ComponentZ} />
          <Route path="/search" exact component={SearchSection}  />
        </Switch> */}
        <SearchSection listingsData = {this.state.listingsData} />
        <div className="clear"></div>
        <Footer />
      </div>
      </Router> 
  );
  }
}




