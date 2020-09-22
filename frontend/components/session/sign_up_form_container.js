import { connect } from 'react-redux';
import User from '../user/user';
import { signUp } from '../../actions/session_actions';


const mSTP = state => {
    return (
        //state of the user container ?
  )
};


const mDTP = dispatch => {
    return (
        {
            signUp : user => dispatch(signUp(user))
        }
    )
};

export default connect(mSTP, mDTP)(User);