import React from 'react';
import  Aside from './modules/Aside';
import Footer from './modules/Footer';
import Nav from './modules/Nav'
import ComponentX from './modules/ComponentX'
import '../App.css';
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
