import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    
    <Route path={path} exact={exact} render={(props) => (
    
        !loggedIn ? ( <Component {...props} /> ) : ( <Redirect to="/main/notes" /> )
    
        )} 
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    
    <Route path={path} exact={exact} render={(props) => (
    
        loggedIn ? (<Component {...props} /> ) : ( <Redirect to="/" /> )
    
        )} 
    />
);

const RefreshRoute = () => (
        <Redirect
          to={{
            pathname: "/main/notes"
          }}
        />
      
);


const mapStateToProps = state => {

    return { loggedIn: Boolean(state.session.id)}
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const Refresh = withRouter(connect(mapStateToProps)(RefreshRoute));
