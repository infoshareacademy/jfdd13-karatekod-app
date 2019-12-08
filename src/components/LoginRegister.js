import React, {Component} from 'react'
import firebase from '../firebase'
import styles from '../styles/LoginRegister.module.css'



const stopUser = () => {
    firebase
      .database()
      .ref("/users")
      .off();
  };






export default class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: '',
            formType:'LOGIN TO BOOKSWAPP',
            loginBtn: true,
            displayName: '',
            password1: '',
            resetPassword: false,
            messages: ''
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
                if (error.code == "auth/wrong-password" || error.code == "auth/user-not-found") {
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
        if (this.state.email =='' || this.state.password ==''){
            this.setState({
                errors:'Email and/or password cannot be an empty field'
            })
        }
        else if (this.state.password1 == '') {
            this.setState({
                errors:'Please, confirm the password'
            })
        } else {
            (this.state.password === this.state.password1)?(
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                
                .then(credential => {
                    
                    return firebase.database().ref('/users/' + credential.user.uid).set({
                    email: credential.user.email,
                    uid: credential.user.uid,
                    created: credential.user.metadata.creationTime
                    });
                })
                .then(()=> {
                    firebase.auth().currentUser.updateProfile({displayName:this.state.displayName})
                    })           
            
                .catch((error)=>{
                    if (error.code == "auth/invalid-email") {
                        this.setState({errors : "Invalid e-mail format"})
                    } else {
                        this.setState({errors:error.message})}
                })
            ):(
            this.setState({errors:'password and its confirmation do not match'}))
        }    
    }

    

    switchButton = action => {
        
        
        if (action == 'register') {
            this.setState({
                formType: 'REGISTER NEW USER',
                loginBtn: false,
                errors:''
            })
         } else {
             this.setState({
                 formType: 'LOGIN TO BOOKSWAPP', 
                 loginBtn: true, 
                 errors: '',
                 password:'',
                 password1:'',
                 displayName:'',
                 email: ''
                })

           }
        }
    resetPassword = e => {
        e.preventDefault();
        this.setState({
            resetPassword:true,
            errors:'',
            email: '',
            formType:'RESET PASSWORD'
        })
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
                    errors:'',
                    messages:'An email has been sent to provided adress. Check your email-box for instructions how to set a new password.',
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
            password: '',
            password1:'',
            displayName: '',
            messages:'',
            formType: 'LOGIN TO BOOKSWAPP'
        })
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    componentWillUnmount(){
          stopUser()
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
            >enter</button>) : 
            (<button type="submit"
            className={styles.submitBtn}
            value="register"
            onClick={this.register}
            >register</button>)
        let login_rgister = this.state.loginBtn ? 
            (<button className={styles.registerBtn} onClick={(e)=>this.switchButton('register')}>register</button>) : 
            (<button className={styles.registerBtn} onClick={(e)=>this.switchButton('login')}>Login</button>)
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
                                {(this.state.formType==='REGISTER NEW USER')?
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
                                placeholder="name (optional)"
                                />
                                </>):null}                              
                            </form>
                            {submitBtn}
                            {login_rgister}
                            {resetPassBtn}                           
                          
                        </div>
                    </>
                ):(
                
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





