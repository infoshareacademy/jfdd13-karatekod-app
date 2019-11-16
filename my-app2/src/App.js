import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const Home = () => {
  return (
  <h1>Strona startowa</h1>
  )
}

const News = () => {
  return  (
  <h1>News</h1>
  )
}

const Contact = () => {
  return (
  <h1>Contact us</h1>
  )
}


function App() {
  return (
    <Router>
      <div>
        <heder>
          <nav>
            <li><Link to="/">Start</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </nav>

          <section>
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/contact" component={Contact}/>
          </section>


        </heder>
      </div>
    </Router>
  );
}

export default App;
