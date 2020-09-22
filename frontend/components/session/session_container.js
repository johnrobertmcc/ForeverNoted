import { connect } from 'react-redux';
import Session from './log_in_form';
import { logIn, logOut, signUp } from '../../actions/session_actions';


const mSTP = state => {
    return (
        //state of the session container ?
  )
};


const mdTP = dispatch => {
    return (
        {
            logIn : user=> dispatch(logIn(user)),
            logOut :() => dispatch(logOut(())),
            signUp :() => dispatch(signUp(())),
        }
    )
};

export default connect(mSTP, mDTP)(Session);