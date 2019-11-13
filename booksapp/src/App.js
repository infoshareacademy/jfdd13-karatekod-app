import React from 'react';
import  Aside from './Aside';
import Footer from './Footer';
import Nav from './Nav'
import ComponentX from './ComponentX'
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
