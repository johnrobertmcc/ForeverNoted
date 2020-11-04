import { connect } from 'react-redux';
import SideBar from './sidebar_form';
import { logOut } from '../../../actions/session_actions';
import {fetchNotebooks} from '../../../actions/notebook_actions';
import {fetchAllTags} from '../../../actions/tag_actions';


const mSTP = (state, ownProps) => {
    debugger

    return { 
        currentUser: state.entities.users[state.session.id],
        notebooks: Object.values(state.entities.notebooks),
        tags: Object.values(state.entities.tags)
    }
}

const mDTP = dispatch => {
    return ({
        logOut: () => dispatch(logOut()),
        fetchNotebooks: (id) => dispatch(fetchNotebooks(id)),
        fetchTags: (id) => dispatch(fetchAllTags(id))
    })
}


export default connect(mSTP, mDTP)(SideBar);