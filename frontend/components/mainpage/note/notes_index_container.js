import { connect } from 'react-redux';
import NoteIndex from './note_index';


const mapStateToProps = (state) => {

    
    return {
        notes: Object.values(state.entities.notes), 
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => {
    
    return { 
        deleteNote: (id) => dispatch(deleteNote(id)), 
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex); 