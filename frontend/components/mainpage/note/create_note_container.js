import { connect } from 'react-redux';
import CreateNote from './create_note';
import { createNote } from '../../../actions/note_actions';
import { fetchNotebook, fetchNotebooks } from '../../../actions/notebook_actions';


const mSTP = (state, ownProps) => {
    // const notebookId = state.entities.notes[0].notebook_id
    debugger
    return { 
        currentUser: state.entities.users[state.session.id],
        notebooks: Object.values(state.entities.notebooks)
        // notebookId
    }
};


const mapDispatchToProps = dispatch => {

    return {
        createNote: note => dispatch(createNote(note)),
        fetchNotebook: id => dispatch(fetchNotebook(id)),
        fetchNotebooks: id => dispatch(fetchNotebooks(id)),
    }
};

export default connect(mSTP, mapDispatchToProps)(CreateNote); 


// add form type