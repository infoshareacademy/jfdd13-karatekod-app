import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const permission = true;

class AdminPage extends React.Component {

    constructor(props){
        super(props)
    this.state={
        favorites: JSON.parse(localStorage.getItem('favorites')).map(item => (<div>{JSON.parse(localStorage.getItem('favorites'))}</div>))
    }
}
    render(){
    return (
        <Route render={() =>(
            permission ? (
            <div>
            <h3>Welcome to BookSwap App!</h3>
                <div>Favorites: {this.state.favorites}</div>
                </div>) :
            (<Redirect to="/login" /> )
    )} />
    )
            }
}

export default AdminPage