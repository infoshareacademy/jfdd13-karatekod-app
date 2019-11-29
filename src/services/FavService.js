import firebase from "../firebase"
export const addFavFirebase = (bookid, auth) => {
    firebase
        .database()
        .ref("favorites").child(auth.uid).child(bookid).transaction(currentValue => currentValue ? null : true)
        
};