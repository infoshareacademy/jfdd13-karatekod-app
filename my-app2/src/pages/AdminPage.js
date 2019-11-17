import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const permission = true;

const AdminPage = () => {
    return (
        <Route render={() =>(
            permission ? (<h3>admin pannel - hello</h3>) :
            (<Redirect to="/login" /> )
    )} />
    )
}

export default AdminPage