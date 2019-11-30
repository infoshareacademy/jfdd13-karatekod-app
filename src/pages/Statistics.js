import React from 'react';
import Graph1  from "../components/Graph1";
import Graph2  from "../components/Graph2";
import styles from "../styles/Statistics.module.css"
import {addBooksFirebase} from "../services/BookService"




const Statistics = () => {
    return(
        <div className={styles.graphs}>
            <h1 className={styles.h1}>BookSwapp statistics</h1>
            <div className={styles.graph1}>
                <Graph1/>
                <p>This graph shows our users number growth  from last 4 weeks. As you can see, our app is growing really fast! Join our members now and start book swapping.</p>
            </div>
            <div className={styles.graph2}>
                <Graph2/>
                <p> This pie chart illustrates number of book types avaliable to swap in %. Fantasy is definitely favorite Book Swappers book genre.
                    Find out which type is your favorite!</p>
            </div>
            <p></p>
        </div>
    )
}
  
  export default Statistics;