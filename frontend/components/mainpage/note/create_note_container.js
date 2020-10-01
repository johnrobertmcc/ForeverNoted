import { connect } from 'react-redux';
import CreateNote from './create_note';
import { createNote } from '../../../actions/note_actions';
import { fetchNotebook } from '../../../actions/notebook_actions';


const mSTP = (state, ownProps) => {
    // const notebookId = state.entities.notes[0].notebook_id
    return { 
        currentUser: state.entities.users[state.session.id], 
        // notebookId
    }
};


const mapDispatchToProps = dispatch => {

    return {
        createNote: note => dispatch(createNote(note)),
        fetchNotebook: id => dispatch(fetchNotebook(id))
    }
};

export default connect(mSTP, mapDispatchToProps)(CreateNote); 


// add form type