import React, {Component} from 'react'
import firebase from '../firebase'
import styles from '../styles/LoginRegister.module.css'









export default class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: '',
            formType:'login',
            loginBtn: true,
            displayName: '',
            password1: '',
            resetPassword: false
        }
        this.resetPass = this.resetPass.bind(this)
        this.backToLogin = this.backToLogin.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    login = e => {
        if (this.state.email !=='' && this.state.password !==''){
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error)=>{
                console.log(error)
                if (error.code == "auth/wrong-password" || error.code == "auth/wrong-password") {
                this.setState({errors:"Invalid user or password"})
                } else if (error.code == "auth/invalid-email") {
                    this.setState({errors : "Invalid e-mail format"})
                }
            })
        } else {
            this.setState({
                errors:'Email and/or password cannot be an empty field'
            })
        }
    }

    register = e => {
        e.preventDefault();
        if (this.state.email !=='' && this.state.password !=='')
        {
            (this.state.password === this.state.password1)?(
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=> {
                const user = firebase.auth().currentUser;
                user.updateProfile({displayName:this.state.displayName})
                
            })
            .then (()=> {
                const user = firebase.auth().currentUser;
                firebase.database().ref('/users/' + user.uid).set( {
                        name: user.displayName,
                        created: user.metadata.creationTime,
                        lastSingIn: user.metadata.lastSignInTime,
                        profilePicture: user.profilePicture
                })
            })
            .catch((error)=>{
                if (error.code == "auth/invalid-email") {
                    this.setState({errors : "Invalid e-mail format"})
                } else {
                this.setState({errors:error.message})}
            })
            ):(this.setState({errors:'password and its confirmation do not match'}))
        } else {
            this.setState({
                errors:'Email and/or password cannot be an empty field'
            })
        }
    }

    

    getAction = action => {
        
        
        if (action == 'register') {
            this.setState({
                formType: 'Register new user',
                loginBtn: false,
                errors:''
            })
         } else {
             this.setState({formType: 'Login', loginBtn: true, errors: ''})

           }
        }
    resetPassword = e => {
        e.preventDefault();
        this.setState({
            resetPassword:true,
            errors:''})
    }
    resetPass() {
        let auth = firebase.auth();
        let {email} = this.state
        if (email == '') {            
            this.setState({errors: "Please, type an email provided during registration to BookswApp"})
        }
        else if (!this.validateEmail(email)) {
            this.setState({errors:'Email has invalid format'})
        }
        
        else {
            auth.sendPasswordResetEmail(email)
            .then(
                this.setState({
                    errors:'Check your email-box for instructions how to set a new password.',
                    email:''})
                )
            .catch((error) => {console.log(error)})
        }

    }
    backToLogin() {
        this.setState({
            resetPassword: false,
             email: '',
            errors: '',
            password: ''
        })
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }  

    render() {

        let errorNotification = this.state.errors ?
            (<div className={styles.error}>{this.state.errors}</div>) : null
        let submitBtn = this.state.loginBtn ?
            (<button
                className={styles.submitBtn}
                value="enter"
                onClick={this.login}
            >enter</button>) : 
            (<button type="submit"
            className={styles.submitBtn}
            value="register"
            onClick={this.register}
            >register</button>)
        let login_rgister = this.state.loginBtn ? 
            (<button className={styles.registerBtn} onClick={(e)=>this.getAction('register')}>Register</button>) : 
            (<button className={styles.registerBtn} onClick={(e)=>this.getAction('login')}>Login</button>)
        let resetPassBtn = this.state.loginBtn?
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
                                />
                                <input type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                name="password"
                                placeholder="password"
                                />
                                {(this.state.formType==='Register new user')?
                                (<>
                                <input type="password"
                                value={this.state.password1}
                                onChange={this.handleChange}
                                name="password1"
                                placeholder="confirm password"
                                />
                                <input type="text"
                                value={this.state.displayName}
                                onChange={this.handleChange}
                                name="displayName"
                                placeholder="name"
                                />
                                </>):null}
                                
                            

                            </form>
                            {submitBtn}
                            {login_rgister}
                            {resetPassBtn}
                            
                            
                        </div>
                    </>
                ):(
                
                    <div className={styles.resetPassContainer}>
                        {errorNotification}
                        <input type="email" name="email" onChange={this.handleChange}></input>
                        <button onClick={this.resetPass}>Reset Password</button>
                        <button onClick={this.backToLogin}>back to login</button>
                    
                
                    </div>
                )}
             </div>
            )
        }
    }





