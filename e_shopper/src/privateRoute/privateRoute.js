import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';



function PrivateRoute({ component: Component, ...rest }) {
    const auth = useSelector((state) => state.auth)
    return (
        <Route {...rest} render = {props => (
            auth.value !== null ?
            <Component  {...props} /> 
            :
            <Redirect to={"/login"} />
        )} 
        />
    );
}

export default PrivateRoute;