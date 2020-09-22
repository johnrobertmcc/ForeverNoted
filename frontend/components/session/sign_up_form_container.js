import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { signUp, logIn, logOut } from '../../actions/session_actions';


// const mSTP = state => {
// // debugger
//     return "hello";
// };


const mDTP = dispatch => {

    return { 
            signUp : user => dispatch(signUp(user)),
            logIn : user => dispatch(logIn(user)),
            logOut : user => dispatch(logOut(user))
        };
    
};

export default connect(null, mDTP)(SignUpForm);