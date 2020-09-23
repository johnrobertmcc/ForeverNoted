import { connect } from 'react-redux';
import LogInForm from '././log_in_form';
import { logIn, logOut } from '../../actions/session_actions';

const mSTP = ({errors}, state) => (
   { errors : errors.session}
)

const mDTP = dispatch => {
debugger
    return {
        logIn: user => dispatch(logIn(user)),
        logOut: user => dispatch(logOut(user))
    };

};

export default connect(mSTP, mDTP)(LogInForm);