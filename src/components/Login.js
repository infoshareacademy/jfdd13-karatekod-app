import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

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
                <div>Is isSignedIn</div>
                ): (
                <StyledFirebaseAuth 
                uiConfig={this.uiConfig}
                firebaseAuth= {firebase.auth()} 
                />
                )}
            </div>
        )
    }
}

export default Login
