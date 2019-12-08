import React, { Component } from 'react';
import styles from '../styles/ResetPass.module.css'
import firebase from '../firebase'


export default class ResetPass extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:''
        }
    this.resetPass = this.resetPass.bind(this)
    }
    resetPass() {
        let auth = firebase.auth();
        let {email} = this.state
        if (email != '' ) {

        } else {
            console.log('empty email')
        }

    }
    handleInput = e => {
        this.setState({
        [e.target.name]: e.target.value})
    }


    render() {
        return (
        <div className={styles.resetPassContainer}>
        
            <input type="email" name="email" onChange={this.handleInput}></input>
            <button onClick={this.resetPass}>Reset Password</button>
        
        
        </div>
        )
    }


}
