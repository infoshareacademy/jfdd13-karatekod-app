import React from 'react';
import Main from '../src/modules/Main';
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
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/x" exact component={ComponentX} />
          <Route path="/y" exact component={ComponentY} />
          <Route path="/z" exact component={ComponentZ} />
        </Switch>
        <div className="clear"></div>
        <Footer />
      </div>
      </Router> 
  );
}

export default App;
