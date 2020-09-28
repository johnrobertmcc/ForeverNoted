import { connect } from 'react-redux';
import CreateNotebook from './create_notebook';
import { createNotebook } from '../../../actions/notebook_actions';

const mapDispatchToProps = dispatch => {

    return {
        createNotebook: notebook => dispatch(createNotebook(notebook))
    }
};

export default connect(null, mapDispatchToProps)(CreateNotebook); 