import firebase from "../firebase"

// this service is for watching for new registered users (dashboard statistics)

const prepareUsersCount = response => {
    return Object.keys(response).length     // returns number of users registered in bookswapp
    };


export const watchUsers = onSuccess => {    // service for watching users
    return firebase
      .database()
      .ref("/users")
      .on("value", dataSnapshot => {
        const users = dataSnapshot.val();
        onSuccess(prepareBooks(users));
      });
  };

  export const stopUsers = () => {      // stop watching for users (for ex. on component unmounting)
    firebase
      .database()
      .ref("/users")
      .off();
  };
