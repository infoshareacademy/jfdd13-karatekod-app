import React from 'react';
import styles from "../styles/AddBooks.module.css"; // imports css styles
import {hasOnlySpecialCharater} from "../helpers/SpecialCharacters"
import { booksList } from '../pages/BooksListPage' // imports booksList from the bookListPage.js
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { addBooksFirebase } from '../services/BookService';
import BookImageUpload from '../components/BookImageUpload'

const initialState = {
    newTitle: "",
    newAutor: "",
    newDescription: "",
    newType: "fantasy",
    newCondition: 1,
    uploadedImageUrl:'http://placekitten.com/140/190'
}

class AddBooks extends React.Component { // AddBooks component
    constructor(props) {
        super(props)
        this.state = {
            booksList: booksList,
            ...initialState,
            error: {
                newTitle: false,
                newAutor: false,
                newDescription: false,
            },

        }
    }

    notify = () => toast('Book added!')

    addBook = () => {
        const newBook = {
            title: this.state.newTitle,
            autor: this.state.newAutor,
            type: this.state.newType,
            imageUrl: this.state.uploadedImageUrl,
            condition: this.state.newCondition,
            description: this.state.newDescription,

        }
        this.notify()
        if ((this.state.newTitle === "" || hasOnlySpecialCharater(this.state.newTitle)) || (this.state.newAutor === "" || hasOnlySpecialCharater(this.state.newAutor))  || (this.state.newDescription === ""|| hasOnlySpecialCharater(this.state.newDescription))) {
            this.setState({
                error: {
                    newTitle: this.state.newTitle==="",
                    newAutor: this.state.newAutor==="",
                    newDescription: this.state.newDescription==="",
                }
            })
            return
        } else if (this.state.newAutor === "") {
            this.setState({
                error: {
                    newAutor: this.state.newAutor === ""
                }
            })
            return
        } else if (this.state.newDescription === "") {
            this.setState({
                error: {
                    newDescription: this.state.newDescription === ""
                }
            })
            return
        } else {
            this.setState({
                booksList: [...this.state.booksList, newBook],
                ...initialState
            }, () => {
                this.setState({            
                    error: {
                    newTitle: false,
                    newAutor: false,
                    newDescription: false,
                }})
            })
            addBooksFirebase(this.state.newTitle, this.state.newAutor, this.state.newType, this.state.uploadedImageUrl, this.state.newCondition, this.state.newDescription)
            
        }
    };

    handleTitle = newValue => {
        if (newValue.length > 40) {
            return;
        } 
        this.setState({
            newTitle: newValue
        })
    }
    handleAutor = newValue => {
        if (newValue.length > 40) {
            return
        }
        this.setState({
            newAutor: newValue
        })
    }
    handleType = newValue => {

        this.setState({
            newType: newValue
        })
    }
    handleImageUrl = newValue => {

    }
    handleCondition = newValue => {

        this.setState({
            newCondition: newValue
        })
    }

    handleDescription = newValue => {

        this.setState({
            newDescription: newValue
        })
    }

    handleBookImageUpload = (url) => {
        this.setState({uploadedImageUrl:url})
    }


  // local storage updates whenever something changes in this component
    

    render() {
        const { newTitle, newAutor, newType, newImageUrl, newCondition, newDescription, error } = this.state;

        return (
            <div className={styles.wrap}>
                <h1>Add your books to the database</h1>
                <form className={styles.form}>    
                    <label className={styles.label} >Title*:</label>
                    <input className={styles.input} type="text" name="title" placeholder={error.newTitle ? "Please fill out this field" : "Insert title name here"} value={newTitle} onChange={event => {
                        this.handleTitle(event.target.value);
                    }} className={error.newTitle ? styles.inputError : styles.input} />

                    <label className={styles.label} >Author*:</label>
                    <input className={styles.input} type="text" name="autor" placeholder={error.newAutor ? "Please fill out this field" : "Insert author name here"} value={newAutor} onChange={event => {
                        this.handleAutor(event.target.value);
                    }} className={error.newAutor ? styles.inputError : styles.input} />

                    <label className={styles.label} >Genre*:</label>
                    <select className={styles.dropdown} type="text" name="type" value={newType} onChange={event => {
                        this.handleType(event.target.value);
                    }} name="genre">
                        <option value="fantasy">fantasy</option>
                        <option value="drama">drama</option>
                        <option value="romance">romance</option>
                        <option value="thriller">thriller</option>
                        <option value="guide">guide</option>
                        <option value="crime">crime</option>
                        <option value="biography">biography</option>
                        <option value="other">other</option>
                    </select>

                    <label className={styles.label}>Cover photo:</label>
                    <BookImageUpload onBookImageUpload={this.handleBookImageUpload}/> 
                    {/* <input className={styles.input} type="text" name="imageUrl" placeholder="URL, ex. http://placekitten.com/140/190 " value={newImageUrl} onChange={event => {
                        this.handleImageUrl(event.target.value);
                    }} /> */}

                    <label className={styles.label}>Condition*:</label>
                    <select className={styles.dropdown} type="text" name="type" value={newCondition} onChange={event => {
                        this.handleCondition(event.target.value);
                    }} name="genre">
                        <option value="1">1 (very bad)</option>
                        <option value="2">2 (not good)</option>
                        <option value="3">3 (it's ok)</option>
                        <option value="4">4 (good)</option>
                        <option value="5">5 (mint)</option>
                    </select>

                    <label className={styles.label}>Description*:</label>
                    <textarea value={newDescription} onChange={event => { this.handleDescription(event.target.value) }} className={error.newDescription ? styles.textareaError : styles.textarea} placeholder={error.newDescription ? "Please fill out this field" : "Insert description of the book here"} id="txtArea" rows="10" cols="40"></textarea>

                    <button className={styles.button} onClick={(e) => {
                            e.preventDefault()
                            this.addBook(e)                  
                    }}>
                        ADD TO BOOKSWAPP
            </button>
                </form>
                <ToastContainer
                toastClassName="dupa"
                hideProgressBar={true}
                position="bottom-right"
                />
            </div>
        )
    }
}





export default AddBooks

