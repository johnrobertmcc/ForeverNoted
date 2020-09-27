import { connect } from 'react-redux';
import CreateNote from './create_note';
import { createNote } from '../../../actions/note_actions';

const mapDispatchToProps = dispatch => {

    return {
        createNote: note => dispatch(createNote(note))
    }
};

export default connect(null, mapDispatchToProps)(CreateNote); 