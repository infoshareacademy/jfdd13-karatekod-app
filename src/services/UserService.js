import firebase from "../firebase"

const prepareUsersCountNumber = response => {
    return Object.keys(response).length    
    };


export const watchUsersNumber = onSuccess => {  
    return firebase
      .database()
      .ref("/users")
      .on("value", dataSnapshot => {
        const users = dataSnapshot.val();
        onSuccess(prepareUsersCountNumber(users));
      });
  };

  const prepareUsersCreated = response => {
    return response     
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

  export const stopUsers = () => {     
    firebase
      .database()
      .ref("/users")
      .off();
  };
