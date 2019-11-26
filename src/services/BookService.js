 import firebase from "../firebase"

 
 export const addBooks = (title, autor, type, imageUrl, condition, description) =>{
     firebase
     .database()
     .ref("/booksList")
     .push({
         title,                 // doesnt need uuid, firebase will create unique id for each book
         autor,
         type,
         imageUrl,
         condition,
         description
     })
 };
 
const prepareBooks = data =>{}  // prepare received data format for operations
 

export const watchBooks = onSuccess => {        // watch for new books
    return firebase
    .database()
    .ref("/booksList")
    .on('value', dataSnapshot=>{
    const books = dataSnapshot.val();
    onSuccess(prepareBooks(books);)
});
};

export const stopBooks = () => {        // stop watching for new books
    firebase        
    .database()
    .ref("/booksList")
    .off()
}




 // this is an instance of firebase.database
 // this is reference to our database https://console.firebase.google.com/project/bookswapp-16613/database/booksList







/*
{
    id: uuid.v4(),
    title: "Metro 2033",
    autor: "Dmitry Glukhovsky",
    type: "fantasy",
    imageUrl: "http://placekitten.com/140/190",
    condition: 5,
    description: `You have to allow the paint to break to make it beautiful. It takes dark in order to show light. We'll play with clouds today. This is a happy place, little squirrels live here and play. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Making all those little fluffies that live in the clouds.`
      
},

*/