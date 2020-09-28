import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes } from '../../../actions/note_actions';

const mapStateToProps = (state) => {
    
    return {
        notes: Object.values(state.entities.notes), 
        users: state.entities.users
    }
};

const mapDispatchToProps = dispatch => {
    
    return { fetchNotes: () => dispatch(fetchNotes()) }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex); 