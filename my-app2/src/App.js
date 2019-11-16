import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'

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
            <ul>
              {/* NavLink dodje klase active do aktywnego elementu */}
              <li><NavLink to="/" exact strict sensitive activeClassName=
              "home_selected" activeStyle={{
                backgroundColor: 'black'
              }}>Start</NavLink></li>
              <li><NavLink to="/news" activeClassName="news_selected">News</NavLink></li>
              <li><NavLink to="/contact" activeClassName="contact_selected">Contact us</NavLink></li>
            </ul>
          </nav>

          <section>
          <Route path="/" exact strict sesitive component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/contact" component={Contact}/>
          </section>


        </heder>
      </div>
    </Router>
  );
}

export default App;
