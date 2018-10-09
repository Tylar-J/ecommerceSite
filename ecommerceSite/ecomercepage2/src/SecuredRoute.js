import React from 'react';
import {Route} from 'react-router-dom';
import auth0Client from './auth';

function SecuredRoute(props) {
  const {component: Component, path} = props;
  return (
    <Route path={path} render={() => {
        if (!auth0Client.isAuthenticated()) {
          auth0Client.signIn();
          return <div></div>;
        }
        return <Component products={props.products}/>
    }} />
  );
}

export default SecuredRoute;