import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import styles from '../styles/Login.module.css'
import fire from '../firebase'
import logoText from '../images/logo.png'
import logo from '../images/logopic.png'

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
                   <div className={styles.userProfile}>                        
                        <button onClick = {()=>firebase.auth().signOut()} >Sign out</button>
                        <div style={{clear:"both"}}></div>
                        <div className={styles.userContent}>                        
                        <h1>Welcome, {firebase.auth().currentUser.displayName}!</h1>                       
                        <img src={firebase.auth().currentUser.photoURL}></img>                   
                        </div>
                    </div>

                ) : (

              <div className = {styles.loginGrid}>
                    <div className = {styles.logoSection} >
                       <div className={styles.logo}> <img src={logo}  width="100%"/> </div>
                      <div className={styles.logoText}>  <img src={logoText}  width="100%"/> </div>
                    </div>
                    <div className={styles.loginDesc}>
                        Welcome to the world, where your books gain second life. Join the society, where people
                           share experience through the stories they have red. It's easy like one (Sign in), two
                           (upload your books), and three (find books to swap)
                    </div>
                    
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
