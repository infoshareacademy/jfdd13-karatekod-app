import firebase from "../firebase"

// this service is for watching for new registered users (dashboard statistics)

const prepareUsersCountNumber = response => {
    return Object.keys(response).length     // returns number of users registered in bookswapp
    };


export const watchUsersNumber = onSuccess => {    // service for watching users
    return firebase
      .database()
      .ref("/users")
      .on("value", dataSnapshot => {
        const users = dataSnapshot.val();
        onSuccess(prepareUsersCountNumber(users));
      });
  };

  const prepareUsersCreated = response => {
    return response     // returns number of users registered in bookswapp
    };

export const watchUsers = onSuccess => {
  return firebase
  .database()
  .ref("/users")
  .on('value', dataSnapshot => {
    const users = dataSnapshot.val()
    const usersProperty = Object.values(users)
    const usersCreatedAt = usersProperty.map(user=>user.created)
    onSuccess(prepareUsersCreated(usersCreatedAt))
  })
}


  export const stopUsers = () => {      // stop watching for users (for ex. on component unmounting)
    firebase
      .database()
      .ref("/users")
      .off();
  };
