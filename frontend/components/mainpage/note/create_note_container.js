import { connect } from 'react-redux';
import CreateNote from './create_note';
import { createNote } from '../../../actions/note_actions';

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        createNote: note => dispatch(createNote(note))
    }
};

export default connect(null, mapDispatchToProps)(CreateNote); 