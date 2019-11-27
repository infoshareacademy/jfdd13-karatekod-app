import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyDMJhPvjpApYZzvwxO2TPJ3Sy3k6vv6GFo",
    authDomain: "bookswapp-16613.firebaseapp.com",
    databaseURL: "https://bookswapp-16613.firebaseio.com",
    projectId: "bookswapp-16613",
    storageBucket: "bookswapp-16613.appspot.com",
    messagingSenderId: "1060477790235",
    appId: "1:1060477790235:web:0762ea4513feb1a59b70be"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase
