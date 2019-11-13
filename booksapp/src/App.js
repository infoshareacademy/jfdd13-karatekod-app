import React from 'react';
import  Aside from '../src/modules/Aside';
import Footer from '../src/modules/Footer';
import Nav from '../src/modules/Nav'
import ComponentX from '../src/modules/ComponentX'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>     
      <div className="App">
        
        <Nav />
        <Aside />
        <Footer />
        
      </div>
      </Router> 
  );
}

export default App;
