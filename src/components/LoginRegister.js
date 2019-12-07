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
            displayName: ''
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
        let name = this.state.displayName
        
        
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(function(){
            var user = firebase.auth().currentUser;
            user.updateProfile({
            displayName: name
     
            })}
        )
        .catch((error)=>{
            console.log(error)
            this.setState({errors:error.message})
        })
       
       
    }
    


    getAction = action => {
        if (action == 'register') {
            this.setState({
                formType: 'Register new user',
                loginBtn: false,
                errors:''
            })
         } else {
             this.setState({formType: 'Register new user', loginBtn: true, errors: ''})

           }
        }
    

    render() {

        let errorNotification = this.state.errors ?
            (<div className={styles.error}>{this.state.errors}</div>) : null
        let submitBtn = this.state.loginBtn ?
            (<input type="submit"
                className={styles.submitBtn}
                value="login"
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
                    />
                     <input type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                    />
                     <input type="text"
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    name="displayName"
                    />
                     {submitBtn}

                </form>
                {login_rgister}
                
                
                </div>
            </div>
        )
    }
}





