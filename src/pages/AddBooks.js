import React from 'react';
import styles from "../styles/AddBooks.module.css"; 
import {hasOnlySpecialCharater} from "../helpers/SpecialCharacters"
import { booksList } from '../pages/BooksListPage' 
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { addBooksFirebase } from '../services/BookService';
import BookImageUpload from '../components/BookImageUpload';
import { Button, Input, TextArea, Select } from 'bloomer'; 
import 'bulma/css/bulma.min.css'


const initialState = {
    newTitle: "",
    newAutor: "",
    newDescription: "",
    newType: "fantasy",
    newCondition: 1,
    uploadedImageUrl:'https://firebasestorage.googleapis.com/v0/b/bookswapp-16613.appspot.com/o/bookcovers%2Flogopic.png?alt=media&token=f65eb097-c4ad-4f79-928a-b189b0b2bad7'
}

class AddBooks extends React.Component { 
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
            this.notify()

            
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

    render() {
        const { newTitle, newAutor, newType, newCondition, newDescription, error } = this.state;

        return (
            <div className={styles.wrap}>
                <h1>Add your books to the database</h1>
                <form className={styles.form}>    
                    <label className={styles.label} >Title*:</label>

                    <Input isColor="black" className={styles.input} type="text" name="title" placeholder={error.newTitle ? "Please fill out this field" : "Insert title name here"} value={newTitle} onChange={event => {

                        this.handleTitle(event.target.value);
                    }} className={error.newTitle ? styles.inputError : styles.input} />

                    <label className={styles.label} >Author*:</label>

                    <Input isColor="black" className={styles.input} type="text" name="autor" placeholder={error.newAutor ? "Please fill out this field" : "Insert author name here"} value={newAutor} onChange={event => {
                        this.handleAutor(event.target.value);
                    }} className={error.newAutor ? styles.inputError : styles.input} />



                    <div className={styles.selects}>
                        <div className={styles.select1}>
                        <label className={styles.label} >Genre*:</label>
                        <Select isColor="black"
                        type="text" name="type" value={newType} onChange={event => {
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
                        </Select>
                        </div>

                        <div className={styles.select2}>
                        <label className={styles.label}>Condition*:</label>

                        <Select isColor="black"
                        type="text" name="type" value={newCondition} onChange={event => {
                            this.handleCondition(event.target.value);
                        }} name="genre">
                            <option value="1">1 (mint)</option>
                            <option value="2">2 (good)</option>
                            <option value="3">3 (it's ok)</option>
                            <option value="4">4 (not good)</option>
                            <option value="5">5 (bad)</option>
                        </Select>
                        </div>
                    </div>
                    <label className={styles.label}>Cover photo:</label>
                    <BookImageUpload onBookImageUpload={this.handleBookImageUpload}/> 

                    <label className={styles.label}>Description*:</label>
                    <TextArea isSize="large" value={newDescription} onChange={event => { this.handleDescription(event.target.value) }} className={error.newDescription ? styles.textareaError : styles.textarea} placeholder={error.newDescription ? "Please fill out this field" : "Insert description of the book here"} id="txtArea" rows="10" cols="40"></TextArea>

                    <Button isColor='danger' className={styles.button} onClick={(e) => {
                            e.preventDefault()
                            this.addBook(e)                  
                    }}>
                        ADD TO BOOKSWAPP
                    </Button>
                </form>
                    <ToastContainer
                    hideProgressBar={true}
                    position="top-right"
                    />
            </div>
        )
    }
}





export default AddBooks

