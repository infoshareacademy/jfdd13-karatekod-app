import React from 'react';
import  Aside from '../src/modules/Aside';
import Footer from '../src/modules/Footer';
import Nav from '../src/modules/Nav';
import ComponentX from '../src/modules/ComponentX';
import ComponentY from '../src/modules/ComponentY';
import ComponentZ from '../src/modules/ComponentZ';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap/min.css";
import Home from './pages/HomePage';
import SingleProduct from './pages/SingleProductPage';
import Products from './pages/ProductsPage'
import About from './pages/AboutPage'
import Default from './pages/DefaultPage'




function App() {
  return (
    <Router>     
      <div className="App">
        
        <Nav />
        <Aside />
        <Switch>
          <Route path="/x" exact component={ComponentX} />
          <Route path="/y" exact component={ComponentY} />
          <Route path="/z" exact component={ComponentZ} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/product:id" component={SingleProduct} />
          <Route component={Default} />
          <Route path="/products" exact component={Products} />
          
        </Switch>
        <div className="clear"></div>
        <Footer />
      </div>
      </Router> 
  );
}

export default App;
