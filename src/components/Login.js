import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import styles from '../styles/Login.module.css'
import logoText from '../images/logo.png'
import logo from '../images/logopic.png'
import ImageUpload from '../components/ImageUpload'
import Favs from '../pages/AdminPage'
import LoginRegister from './LoginRegister'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            isSignedIn : false,
           
        }
    }
    uiConfig = {
        signedInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: (auth) => {
                firebase.database().ref('/users/' + auth.uid).transaction(data => {
                    console.log('data ',data);
                    return {
                        name: firebase.auth().currentUser.displayName,
                        created: firebase.auth().currentUser.metadata.creationTime,
                        lastSingIn: firebase.auth().currentUser.metadata.lastSignInTime,
                        profilePicture: firebase.auth().currentUser.profilePicture}
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
            <>
                {this.state.isSignedIn ? (
                   <div className={styles.userProfile}>
                        <button className={styles.logoutButton} className={styles.button} onClick = {()=>firebase.auth().signOut()} >Sign out</button>
                        <div style={{clear:"both"}}></div>
                        <div className={styles.userHeader}>
                        <div className={styles.userContent}>

                            
                            <h5>Hi {firebase.auth().currentUser.displayName}, great to see you!</h5>  
                            {/* <img src={firebase.auth().currentUser.photoURL}></img> */}
                            <ImageUpload />
                        </div>
                        <Favs />
                        </div>
                    </div>

                ): (

              <div className = {styles.loginGrid}>

                    <div className = {styles.logoSection} >
                       <div className={styles.logo}> <img src={logo}  width="100%"/> </div>
                      <div className={styles.logoText}>  <img src={logoText}  width="100%"/> </div>
                    </div>
                    <div className={styles.loginDesc}>
                        
                    </div>
                    
                    <div className={styles.loginBox}> 
                        <LoginRegister />                           
                        <StyledFirebaseAuth 
                        uiConfig={this.uiConfig}
                        firebaseAuth= {firebase.auth()} 
                        />
                    </div>              
                </div>
                )}
            </>
        )
    }
}

export default Login
