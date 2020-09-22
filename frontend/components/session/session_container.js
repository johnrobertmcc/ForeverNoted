import { connect } from 'react-redux';
import LogInForm from '././log_in_form';
import { logIn, logOut } from '../../actions/session_actions';



const mDTP = dispatch => {
debugger
    return {
        logIn: user => dispatch(logIn(user)),
        logOut: user => dispatch(logOut(user))
    };

};

export default connect(null, mDTP)(LogInForm);