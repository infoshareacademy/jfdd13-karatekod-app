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

    render() {
        return (
            <div className={styles.form_block}>
                <div className={styles.formType}>{this.state.formType}</div>  
                <div className={styles.loginInputs}>
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
                     <input type="submit"
                    className={styles.submitBtn}
                    value="login"
                    onClick={this.login}
                    />

                </form>
                
                
                </div>
            </div>
        )
    }
}





