import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { fetchNotebook } from '../../../actions/notebook_actions';


const mapStateToProps = (state, ownProps) => {


    const notebookId = ownProps.match.params.notebookId;
    const notebook = state.entities.notebooks[notebookId]
    const notes = Object.values(state.entities.notes)

    return { 
        notebook,
        notes
     }
};

const mapDispatchToProps = dispatch => {

    return { 
        fetchNotebook: (id) => dispatch(fetchNotebook(id)),

     }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex); 