import { connect } from 'react-redux';
import CreateNote from './create_note';
import { createNote } from '../../../actions/note_actions';
import { fetchNotebook, fetchNotebooks } from '../../../actions/notebook_actions';


const mSTP = (state, ownProps) => {
    let notebook;
    
    if(ownProps.notebook){
        notebook = ownProps.notebook.id
    }else{
        notebook = false
    }

    

    return { 
        notebook,   
        currentUser: state.entities.users[state.session.id],
        notebooks: Object.values(state.entities.notebooks),
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