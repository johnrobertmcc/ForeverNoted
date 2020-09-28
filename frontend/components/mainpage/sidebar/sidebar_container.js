import { connect } from 'react-redux';
import SideBar from './sidebar_form';
import { logOut } from '../../../actions/session_actions';


const mSTP = state => {

    return { currentUser: state.entities.users[state.session.id] }
}

const mDTP = dispatch => {
    return ({
        logOut: () => dispatch(logOut())
    })
}


export default connect(mSTP, mDTP)(SideBar);