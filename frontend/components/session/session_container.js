import { connect } from 'react-redux';
import LogInForm from '././log_in_form';
import { logIn, logOut } from '../../actions/session_actions';

const mSTP = ({ errors }, state) => {

    return { errors: errors.session }
}

const mDTP = dispatch => {

    return {
        logIn: user => dispatch(logIn(user)),
        logOut: user => dispatch(logOut(user))
    };

};

export default connect(mSTP, mDTP)(LogInForm);