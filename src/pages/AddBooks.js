import React from 'react';
import styles from "../styles/AddBooks.module.css"; // imports css styles
import uuid from "uuid";
import {booksList} from '../pages/BooksListPage' // imports booksList from the bookListPage.js
const initialState = {
    newTitle: "",
    newAutor: "",
    newType: "",
    newImageUrl: "",
    newCondition: "",
}
class AddBooks extends React.Component{ // AddBooks component
    constructor(props){
        super(props)
        this.state = {
            booksList:booksList,
            ...initialState
        }
    }

    addBook = (e) => {   // method for adding new books (now it just adds the same xxx book... gotta get the values from inputs somehow)
        e.preventDefault()
        const newBook = {
          id: uuid.v4(),
          title: this.state.newTitle,
          autor: this.state.newAutor,
          type: this.state.newType,
          imageUrl: "http://placekitten.com/140/190",
          condition: this.state.newCondition
    
        }
        if (this.state.newTitle==="" || this.state.newAutor==="" || this.state.newType==="" || this.state.newImageUrl==="" || this.state.newCondition==="") {
            return 
        } else {
        alert(`You added "${this.state.newTitle}`)
        this.setState({
            booksList:[...this.state.booksList, newBook],
            ...initialState
        })
    }
     };

     handleTitle = newValue =>{
         if (newValue.length>40){
             return
         }
         this.setState({
             newTitle:newValue
         })
     }
     handleAutor = newValue =>{
        if (newValue.length>40){
            return
        }
        this.setState({
            newAutor:newValue
        })
    }
    handleType= newValue =>{
        if (newValue.length>40){
            return
        }
        this.setState({
            newType:newValue
        })
    }
    handleImageUrl = newValue =>{
        
        this.setState({
            newImageUrl:newValue
        })
    }
    handleCondition = newValue =>{
        
        this.setState({
            newCondition:newValue
        })
    }

     componentDidUpdate() {
        localStorage.setItem("bookslist", JSON.stringify(this.state.booksList));    // local storage updates whenever something changes in this component
      }

     render() {
        const { newTitle, newAutor, newType, newImageUrl, newCondition} = this.state;

        return (
            <div className={styles.wrap}>
                 <form className={styles.form}>
      <label className={styles.label}>Title:</label>
      <input className={styles.input} type="text" name="title" placeholder="Insert title name here" value={newTitle} onChange={event => {
        this.handleTitle(event.target.value);
      }}/>

      <label className={styles.label}>Author:</label>
      <input className={styles.input} type="text" name="autor" placeholder="Insert author name here" value={newAutor} onChange={event => {
        this.handleAutor(event.target.value);}}/>

      <label className={styles.label}>Genre:</label>
      <input className={styles.input} type="text" name="type" placeholder="Insert genre name here" value={newType} onChange={event => {
        this.handleType(event.target.value);}}/>

      <label className={styles.label}>Cover photo:</label>
      <input className={styles.input} type="text" name="imageUrl" placeholder="URL, ex. http://placekitten.com/140/190 " value={newImageUrl} onChange={event => {
        this.handleImageUrl(event.target.value);}} />

      <label className={styles.label}>Condition:</label>
      <input className={styles.input} type="text" name="condition" placeholder="What is the condition of your book?" value={newCondition} onChange={event => {
        this.handleCondition(event.target.value);}}/>
    
    <button className={styles.button} onClick={(e)=>{
                this.addBook(e);
                
                console.log(this.state)
                
            }}>
                ADD TO BOOKSWAPP
            </button>   

      </form>
        
            </div>
        )
     }
}





export default AddBooks