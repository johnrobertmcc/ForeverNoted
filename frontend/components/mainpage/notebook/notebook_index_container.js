import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { fetchNotebook } from '../../../actions/notebook_actions';
import {deleteNote} from '../../../actions/note_actions';


const mapStateToProps = (state, ownProps) => {

    const notebook = state.entities.notebooks[ownProps.match.params.notebookId]
    debugger

    if(typeof ownProps.location.state !== 'undefined'){
        return {
            notebook,
            note: true
        }
    }else{ 

        return { 
            notebook
        }
    }
};

const mapDispatchToProps = dispatch => {

    return { 
        fetchNotebook: (id) => dispatch(fetchNotebook(id)),
        deleteNote: id => dispatch(deleteNote(id))

     }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex); 