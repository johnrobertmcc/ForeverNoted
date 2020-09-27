import {connect} from 'react-redux';
import MainPage from './main_page';
import { fetchNotes } from '../../actions/note_actions';


const mSTP = state => {
 
    return {users : state.entities.users}
}

const mDTP = dispatch => {
    return { fetchNotes: () => dispatch(fetchNotes()) }
}


export default connect(mSTP)(mDTP)(MainPage);