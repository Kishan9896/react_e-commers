import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utiliti/index'

export default function publicRoute({ component: Component, restricted = false, ...rest }) {
  return (
    <Route {...rest} render = {props => (
        isLogin () && restricted ? 
        <Redirect to={"/"} />
        :
        <Component  {...props} />            
    )} 
    
    />
  )
}
