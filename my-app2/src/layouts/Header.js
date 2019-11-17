import React from 'react';
import styles from '../styles/Header.module.css';
import { Route, Switch } from 'react-router-dom'
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';



const Header = () => {


    return (

        <div className={styles.header}>
            
     <Switch>
                <Route path="/" exact render={() =>(
                     <img src={photo1} alt="photo1" />
              )} />
               <Route path="/books" exact render={() =>(
                  <img src={photo2} alt="photo2" />
                )} />
            <Route path="/contact"  render={() =>(
                 <img src={photo3} alt="photo3" />
             )} />
            <Route path="/admin" exact render={() =>(
                   <img src={photo4} alt="photo4" />
             )} />
                 <Route render={() =>(
               <img src={photo1} alt="photo1" />
            )} />

           </Switch>
     </div>
    )
}

export default Header