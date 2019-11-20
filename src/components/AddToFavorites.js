import React from 'react'

class AddToFavorites extends React.Component {
constructor(props){
    super(props)
    this.state={

    }
}

addToFavorites(){

}

get isFavoriteVisible() {
    return this.state.todos.some(todo => todo.isDone === true);
  }

render(){
    return(
        <button>Add to Favorites</button>
    )
}
}

export default AddToFavorites