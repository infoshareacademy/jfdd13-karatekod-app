import React from 'react';
import  Aside from '../src/modules/Aside';
import Footer from '../src/modules/Footer';
import Nav from '../src/modules/Nav'
import ComponentX from '../src/modules/ComponentX'
import ComponentY from '../src/modules/ComponentY'
import ComponentZ from '../src/modules/ComponentZ'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>     
      <div className="App">
        
        <Nav />
        <Aside />
        
        <Route path="/x" component={ComponentX} />
        <Route path="/y" component={ComponentY} />
        <Route path="/z" component={ComponentZ} />
        <div className="clear"></div>
        <Footer />
      </div>
      </Router> 
  );
}

export default App;
