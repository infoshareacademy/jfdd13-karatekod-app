import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import styles from '../styles/Login.module.css'


firebase.initializeApp({
    apiKey: 'AIzaSyDMJhPvjpApYZzvwxO2TPJ3Sy3k6vv6GFo',
    authDomain: 'bookswapp-16613.firebaseapp.com'
})



class Login extends Component {


    state = {isSignedIn : false}
    uiConfig = {
        signedInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    componentDidMount = () => {
        
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !!user})  //if the user is object set to tre if not false
        })
    }

    render() {
        return (
            <div>
                {this.state.isSignedIn ? (
                    <>
                        <div>You are sign in</div>
                        <button onClick = {()=>firebase.auth().signOut()}>Sign out</button>
                        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                    </>
                ): (
                    <>
                        <div className={styles.login}>
                        <div className={styles.container}>
                            <h2>Log in to your account</h2>
                            <form className={styles.form}>
                                <label htmlFor="" className={styles.label}> <input className={styles.input} type="text" placeholder="email"/></label>
                                <label htmlFor="" className={styles.label}> <input className={styles.input} type="password" placeholder="password"/></label>
                                <button className={styles.button}>LOG IN</button>
                            </form>
                        </div>
            
                    </div>
                    <StyledFirebaseAuth 
                    uiConfig={this.uiConfig}
                    firebaseAuth= {firebase.auth()} 
                    />
                </>
                )}
            </div>
        )
    }
}

export default Login
