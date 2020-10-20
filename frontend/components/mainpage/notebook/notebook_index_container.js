import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { fetchNotebook } from '../../../actions/notebook_actions';


const mapStateToProps = (state, ownProps) => {

    const notebook = state.entities.notebooks[ownProps.match.params.notebookId]
    debugger

    return { 
        notebook
     }
};

const mapDispatchToProps = dispatch => {

    return { 
        fetchNotebook: (id) => dispatch(fetchNotebook(id)),

     }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex); 