import { connect } from 'react-redux';
import LogInForm from '././log_in_form';
import { logIn, logOut, removeErrors } from '../../actions/session_actions';

const mSTP = ({ errors }) => {

    return { errors: errors.session }
}

const mDTP = dispatch => {

    return {
        logIn: user => dispatch(logIn(user)),
        logOut: user => dispatch(logOut(user)),
        removeErrors: () => dispatch(removeErrors())
    };

};

export default connect(mSTP, mDTP)(LogInForm);