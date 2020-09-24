import { connect } from 'react-redux';
import HomePage from './homepage';
import {logOut, signUp } from '../actions/session_actions';


const mDTP = dispatch => {
    debugger

    return {
        logOut: () => dispatch(logOut()),
        signUp: (user) => dispatch(signUp(user))

    };

};

export default connect(null, mDTP)(HomePage);