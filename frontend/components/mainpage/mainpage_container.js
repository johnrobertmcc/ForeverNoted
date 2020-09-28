import {connect} from 'react-redux';
import MainPage from './main_page';
import {logOut} from '../../actions/session_actions';


const mSTP = state => {
    // debugger
 
    return ({users : state.entities.users, session: state.session})
}

const mDTP = dispatch => {
    return ({
        logOut: () => dispatch(logOut())
    })
}


export default connect(mSTP, mDTP)(MainPage);