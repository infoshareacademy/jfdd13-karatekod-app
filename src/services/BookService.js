import firebase from "../firebase"

export const addBooksFirebase = (title, autor, type, imageUrl, condition, description) => {
    firebase
        .database()
        .ref("/booksList")
        .push({
            title,          
            autor,
            type,
            imageUrl,
            condition,
            description
        })
        console.log(autor)
};

const prepareBooks = bookresponse => {
    return Object.entries(bookresponse).map(arr => {
        const [id, value] = arr;
        return {
            id,
            ...value
        };
    });
}

export const watchBooks = onSuccess => {
    return firebase
      .database()
      .ref("/booksList")
      .on("value", dataSnapshot => {
        const books = dataSnapshot.val();
        onSuccess(prepareBooks(books));
      });
  };

  export const stopBooks = () => {
    firebase
      .database()
      .ref("/booksList")
      .off();
  };

