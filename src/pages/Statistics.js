// import React from 'react';
// import styles from '../styles/Statistics.module.css';
// import dashboard1 from '../images/dashboard1.png';
// import dashboard2 from '../images/dashboard2.png';
// import logo from '../images/logo.png'



// const Statistics = () => {
//     return (
//         <div className={styles.HomePage}>
//             <div className={styles.headerTop}>
//                 <img src={logo} className={styles.logoHome}/><h1> statistics</h1>
//             </div>

//             <div className={styles.dashboard1Container}>
//                     <div class={styles.text1}>
//                     This pie chart illustrates number of book types avaliable to swap in %. Fantasy is definitely favorite Book Swappers book genre.
//                     Find out which type is your favorite!
                    
//                     </div>
//                 <img src={dashboard1} className={styles.dashboard1}/>
//                     <div className={styles.dashboard1Stat}>
//                         <label for="square1"><div className={styles.square1}></div> fantasy</label>
//                         <label for="square2"><div className={styles.square2}></div>drama</label>
//                         <label for="square3"><div className={styles.square3}></div>romance</label>
//                         <label for="square4"><div className={styles.square4}></div>thriller</label>
//                         <label for="square5"><div className={styles.square5}></div>guide</label>
//                         <label for="square6"><div className={styles.square6}></div>crime</label>
//                         <label for="square7"><div className={styles.square7}></div>biography</label>
//                         <label for="square8"><div className={styles.square8}></div>other</label>
//                     </div>
//             </div>


//             <div className={styles.dashboard2Container}>
//                 <img src={dashboard2} className={styles.dashboard2}/>
//                 <div class={styles.text2}>This graph shows our users number growth from January 2019. As you can see, now our application has over 130 000 
//                     book swappers! Join them now and start book swapping.
//                 </div>
//             </div>
                
            
//         </div>
//     )
// }



// export default Statistics

import React from 'react';
import Graph1  from "../components/Graph1";
import Graph2  from "../components/Graph2";




const Statistics = () => {
    return(
        <div>
        <Graph1/>
        <div>This graph shows our users number growth  from last 4 weeks. As you can see, our app is growing really fast! Join our members now and start book swapping.</div>
        <Graph2/>
        <p> This pie chart illustrates number of book types avaliable to swap in %. Fantasy is definitely favorite Book Swappers book genre.
            Find out which type is your favorite!</p>
        </div>
    )
}
  
  export default Statistics;