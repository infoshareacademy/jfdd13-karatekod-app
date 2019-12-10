import React, { Component } from 'react'
import firebase from '../firebase'
import styles from '../styles/LoginRegister.module.css'
import {hasOnlySpecialCharaterAndNumbers} from '../helpers/SpecialCharacters'




export default class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: '',
            formType: 'LOGIN TO BOOKSWAPP',
            loginBtn: true,
            displayName: '',
            password1: '',
            resetPassword: false,
            messages: ''
        }
        this.resetPass = this.resetPass.bind(this)
        this.backToLogin = this.backToLogin.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleBlurPassConf=this.handleBlurPassConf.bind(this)
        this.handleBlurPass = this.handleBlurPass.bind(this)
        
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = e => {
        if (this.state.email !== '' && this.state.password !== '') {
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .catch((error) => {
                    console.log(error)
                    if (error.code == "auth/wrong-password" || error.code == "auth/user-not-found") {
                        this.setState({ errors: "Invalid user or password" })
                    } else if (error.code == "auth/invalid-email") {
                        this.setState({ errors: "Invalid e-mail format" })
                    }
                })
        } else {
            this.setState({
                errors: 'Email and/or password cannot be an empty field'
            })
        }
    }

    register = e => {
        e.preventDefault();
        if (this.state.email == '' || this.state.password == '') {
            this.setState({
                errors: 'Email and/or password cannot be an empty field'
            })
        }
        else if (this.state.password1 == '') {
            this.setState({
                errors: 'Please, confirm the password'
            })
        } else if (hasOnlySpecialCharaterAndNumbers(this.state.displayName)) {
            this.setState({
                errors:'The name cannot contain only numbers and/or special characters'
            })
        } else if (this.state.displayName.length<3 || this.state.displayName.length>12) {
            this.setState({
                errors : 'name has to be min 3 and max 12 characters '
            })
        } else {
            (this.state.password === this.state.password1) ? (
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

                    .then(credential => {

                        return firebase.database().ref('/users/' + credential.user.uid).set({
                            email: credential.user.email,
                            uid: credential.user.uid,
                            created: credential.user.metadata.creationTime
                        });
                    })
                    .then(() => {
                        firebase.auth().currentUser.updateProfile({ displayName: this.state.displayName })
                    })

                    .catch((error) => {
                        if (error.code == "auth/invalid-email") {
                            this.setState({ errors: "Invalid e-mail format" })
                        } else {
                            this.setState({ errors: error.message })
                        }
                    })
            ) : (
                    this.setState({ errors: 'password and its confirmation do not match' }))
        }
    }



    switchButton = action => {


        if (action == 'register') {
            this.setState({
                formType: 'REGISTER NEW USER',
                loginBtn: false,
                errors: ''
            })
        } else {
            this.setState({
                formType: 'LOGIN TO BOOKSWAPP',
                loginBtn: true,
                errors: '',
                password: '',
                password1: '',
                displayName: '',
                email: ''
            })

        }
    }
    resetPassword = e => {
        e.preventDefault();
        this.setState({
            resetPassword: true,
            errors: '',
            email: '',
            formType: 'RESET PASSWORD'
        })
    }
    resetPass() {
        let auth = firebase.auth();
        let { email } = this.state
        if (email == '') {
            this.setState({ errors: "Please, type an email provided during registration to BookswApp" })
        }
        else if (!this.validateEmail(email)) {
            this.setState({ errors: 'Email has invalid format' })
        }

        else {
            auth.sendPasswordResetEmail(email)
                .then(
                    this.setState({
                        errors: '',
                        messages: 'An email has been sent to provided adress. Check your email-box for instructions how to set a new password.',
                        email: ''
                    })
                )
                .catch((error) => { console.log(error) })
        }

    }
    backToLogin() {
        this.setState({
            resetPassword: false,
            email: '',
            errors: '',
            password: '',
            password1: '',
            displayName: '',
            messages: '',
            formType: 'LOGIN TO BOOKSWAPP'
        })
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    
    handleBlur = e => {
        if (this.state.email == '') {
            this.setState({
                errors: 'Email cannot be an empty field'
            })
        } else {
            this.setState({
                errors:''
            })
        }
        if (!this.validateEmail(this.state.email)) {
            this.setState({ errors: 'Email has invalid format' })
        } else {
            this.setState({
                errors:''
            })
        }
       
    }
    handleBlurPassConf = e =>{        
        if (this.state.password !== '') {
            if (this.state.password1 == '') {
            this.setState({
                errors: 'Please, confirm the password'
            })
        } else {
            this.setState({
                errors:''
            })
        }
        if (this.state.password != this.state.password1 && this.state.password1 != '') {
            this.setState({
                errors: 'Password and its confirmation does not match'
            })
        }else {
            this.setState({
                errors:''
            })
        }
        }else {
        this.setState({
            errors:''
        })
    }
    }
    handleBlurPass = e => {
        if (this.state.password == '') {
            this.setState({
                errors: 'Password cannot be an empty field'
            })
        } else {
            this.setState({
                errors:''
            })
        }
    }
    



    render() {

        let errorNotification = this.state.errors ?
            (<div className={styles.error}>{this.state.errors}</div>) : null
        let msgNotification = this.state.messages ?
            (<div className={styles.messageNotification}>{this.state.messages}</div>) : null
        let submitBtn = this.state.loginBtn ?
            (<button
                className={styles.submitBtn}
                value="enter"
                onClick={this.login}
                >enter
            </button>) :
            (<button type="submit"
                className={styles.submitBtn}
                value="register"
                onClick={this.register}
                >register
            </button>)
        let login_rgister = this.state.loginBtn ?
            (<button className={styles.registerBtn} onClick={(e) => this.switchButton('register')}>register</button>) :
            (<button className={styles.registerBtn} onClick={(e) => this.switchButton('login')}>Login</button>)
        let resetPassBtn = this.state.loginBtn ?
            (<p className={styles.resetInfo} onClick={this.resetPassword}>forgot Password?</p>) :
            null



        return (
            <div className={styles.form_block}>
                {!this.state.resetPassword ? (
                    <>
                        <div className={styles.formType}>{this.state.formType}</div>
                        <div className={styles.loginInputs}>
                            {errorNotification}
                            <form>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    name="email"
                                    placeholder="e-mail"
                                    onBlur={this.handleBlur}
                                />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    name="password"
                                    placeholder="password"
                                    onBlur = {this.handleBlurPass}
                                />
                                {(this.state.formType === 'REGISTER NEW USER') ?
                                    (<>
                                        <input type="password"
                                            value={this.state.password1}
                                            onChange={this.handleChange}
                                            name="password1"
                                            placeholder="confirm password"
                                            onBlur={this.handleBlurPassConf}
                                        />
                                        <input type="text"
                                            value={this.state.displayName}
                                            onChange={this.handleChange}
                                            name="displayName"
                                            placeholder="name (min 3 and max 12 characters)"
                                        />
                                    </>) : null}
                            </form>
                            {submitBtn}
                            {login_rgister}
                            {resetPassBtn}

                        </div>
                    </>
                ) : (

                        <>
                            <div className={styles.formType}>{this.state.formType}</div>
                            <div className={styles.loginInputs}>
                                {errorNotification}
                                {msgNotification}
                                <input
                                    type="text"
                                    name="email"
                                    onChange={this.handleChange}
                                    className={styles.inputResetPass}
                                    placeholder="enter email">

                                </input>
                                <div className={styles.resetButtonsFlex}>
                                    <button
                                        onClick={this.resetPass}
                                        className={styles.buttonReset}>
                                        reset password
                            </button>
                                    <button
                                        onClick={this.backToLogin}
                                        className={styles.back2Login}>
                                        back to login
                            </button>
                                </div>
                            </div>
                        </>
                    )}
            </div>
        )
    }
}

