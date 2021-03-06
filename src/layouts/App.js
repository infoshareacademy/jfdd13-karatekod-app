import React, { Component } from 'react';
import styles from '../styles/App.module.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Page from './Page';
import Secure from '../components/Secure'


function App() {
  return ( 
    <Router>
      <div className={styles.app}>
           <Secure>
           <Header/>
          <main>
            <aside>
              <Navigation className={styles.navigation}/>
            </aside>
              <Page className={styles.page}/>
          </main>
          </Secure>
          <Footer className={styles.footer}/>
          
      </div>
    </Router>
  );
}

export default App;
