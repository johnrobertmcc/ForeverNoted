import {connect} from 'react-redux';
import NotebookAssign from './change_notebook_modal';
import {updateNote} from '../../../actions/note_actions';


const mSTP = (state, ownProps) => {

    return { notebooks: Object.assign(state.entities.notebooks) }

}
const mapDispatchToProps = dispatch => {

    return {
        updateNote: noteId => dispatch(updateNote(noteId))
    }
};

export default connect(mSTP, mapDispatchToProps)(NotebookAssign); 
