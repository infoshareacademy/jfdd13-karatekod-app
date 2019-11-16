import React from 'react';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <heder>
          <nav>
            <li><Link to="/">Start</Link></li>
            <li><Link to="/news">Aktualności</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </nav>

          <section>
            oooo
          </section>


        </heder>
      </div>
    </BrowserRouter>
  );
}

export default App;
