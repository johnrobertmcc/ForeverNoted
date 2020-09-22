import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { signUp } from '../../actions/session_actions';


// const mSTP = state => {
// // debugger
//     return "hello";
// };


const mDTP = dispatch => {

    return { 
            signUp : user => dispatch(signUp(user))
        };
    
};

export default connect(null, mDTP)(SignUpForm);