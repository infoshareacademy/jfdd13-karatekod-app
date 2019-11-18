import React from 'react';
import styles from "../styles/AddBooks.module.css";

const booksList=[];

class AddBooks extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            booksList:booksList
        }
    }

    addBook = () => {
        const newBook = {
          id: 777,
          title: 'xxx',
          author: 'yyy',
          genre: 'zzz',
          cover: 'vvv'
    
        }
        this.setState({
            booksList:[...this.state.booksList, newBook]
        })
     };

     render() {
        return (
            <div className={styles.wrap}>
                 <form className={styles.form}>
      <label className={styles.label}>Title:</label>
      <input className={styles.input} type="text" name="title" placeholder="Insert title name here"/>
      
      <label className={styles.label}>Author:</label>
      <input className={styles.input} type="text" name="author" placeholder="Insert author name here"/>
    
      <label className={styles.label}>Genre:</label>
      <input className={styles.input} type="text" name="genre" placeholder="Insert genre name here"/>
    
      <label className={styles.label}>Cover photo:</label>
      <input className={styles.input} type="text" name="cover photo" placeholder="Insert cover photo here"/>
    
      </form>
    <button className={styles.button} onClick={()=>{
                this.addBook();
                console.log('added')
                console.log(this.state)
            }}>
                Add this book 
            </button>
           
            </div>
        )
     }
}





export default AddBooks