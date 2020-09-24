import { connect } from 'react-redux';
import HomePage from './homepage';
import {logOut } from '../actions/session_actions';


const mDTP = dispatch => {
    debugger

    return {
        logOut: () => dispatch(logOut())
    };

};

export default connect(null, mDTP)(HomePage);