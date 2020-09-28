import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes } from '../../../actions/note_actions';

const mapStateToProps = (state) => {

    
    return {
        notes: Object.values(state.entities.notes), 
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => {
    
    return { fetchNotes: () => dispatch(fetchNotes()) }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex); 