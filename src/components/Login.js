import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import styles from '../styles/Login.module.css'
import fire from '../firebase'





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

            signInSuccess: (auth) => {
                firebase.database().ref('/users/' + auth.uid).transaction(data => {
                    console.log('data ',data);
                    return {
                        name: firebase.auth().currentUser.displayName,
                        created: firebase.auth().currentUser.metadata.creationTime,
                        lastSingIn: firebase.auth().currentUser.metadata.lastSignInTime}
                })
            }
        }
    }
    componentDidMount = () => {
        
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !!user}) 
            console.log("user: ",user)
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
                        <img src={firebase.auth().currentUser.photoURL}></img>
                    </>
                ): (



                <div className = {styles.loginGrid}>
                
                <div>basic information</div>
                <div className={styles.loginBox}>
                        
                    <StyledFirebaseAuth 
                    uiConfig={this.uiConfig}
                    firebaseAuth= {firebase.auth()} 
                    />
                </div>
                
                </div>
                
                
                
                )}
            </div>
        )
    }
}

export default Login
