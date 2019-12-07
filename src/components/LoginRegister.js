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
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    login = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error)=>{
            console.log(error)
            this.setState({errors:error.message})
        })
    }

    register = e => {
        e.preventDefault();
        // let name = this.state.displayName
        (this.state.password === this.state.password1)?(
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=> {
            const user = firebase.auth().currentUser;
            user.updateProfile({displayName:this.state.displayName})
            
        })
        .then (()=> {
            const user = firebase.auth().currentUser;
            firebase.database().ref('/users/' + user.uid).push( {
                    name: user.displayName,
                    created: user.metadata.creationTime,
                    lastSingIn: user.metadata.lastSignInTime,
                    profilePicture: user.profilePicture
            })
        })
         .catch((error)=>{
            console.log(error)
            this.setState({errors:error.message})
        })
        ):(this.setState({errors:'password does not match'}))
    }

    componentWillUnmount(){
         const users = () => {
            firebase
              .database()
              .ref("/users"+ firebase.auth().currentUser.displayName)
              .off();
          };
          users()
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
        this.setState({resetPassword:true})
    }


    
    

    render() {

        let errorNotification = this.state.errors ?
            (<div className={styles.error}>{this.state.errors}</div>) : null
        let submitBtn = this.state.loginBtn ?
            (<input type="submit"
                className={styles.submitBtn}
                value="enter"
                onClick={this.login}
            />) : 
            (<input type="submit"
            className={styles.submitBtn}
            value="register"
            onClick={this.register}
            />)
        let login_rgister = this.state.loginBtn ? 
            (<button className={styles.registerBtn} onClick={()=>this.getAction('register')}>Register</button>) : 
            (<button className={styles.registerBtn} onClick={()=>this.getAction('login')}>Login</button>)
        let resetPassBtn = this.state.loginBtn?
            (<button className={styles.resetBtn} onClick={this.resetPassword}>forgot Password?</button>) :
            null



        return (
            <div className={styles.form_block}>
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
                    
                     {submitBtn}
                     {resetPassBtn}

                </form>
                {login_rgister}

                
                
                </div>
            </div>
        )
    }
}





