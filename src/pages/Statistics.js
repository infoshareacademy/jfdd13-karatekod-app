import React from 'react';
import Graph1  from "../components/Graph1";
import Graph2  from "../components/Graph2";
import styles from "../styles/Statistics.module.css"

const Statistics = () => {
    return(
        <div className={styles.graphs}>
            <div className={styles.graph1}>
                <Graph1/>
                <p>This graph shows our users number growth  from last 7 days. As you can see, our app is growing really fast! Join our members now and start book swapping.</p>
            </div>
            <div className={styles.graph2}>
                <Graph2/>
                <p> This pie chart illustrates number of book types avaliable to swap. Find out which type is your favorite!</p>
            </div>
            <p></p>
        </div>
    )
}
  
export default Statistics;