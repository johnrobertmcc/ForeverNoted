import { connect } from 'react-redux';
import CreateNote from './create_note';
import { createNote } from '../../../actions/note_actions';


const mSTP = (state, ownProps) => {

    return { currentUser: state.entities.users[state.session.id], formType: "Create Note",}
};


const mapDispatchToProps = dispatch => {

    return {
        createNote: note => dispatch(createNote(note))
    }
};

export default connect(mSTP, mapDispatchToProps)(CreateNote); 


// add form type