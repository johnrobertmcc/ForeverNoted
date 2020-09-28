import { connect } from 'react-redux';
import CreateNotebook from './create_notebook';
import { createNotebook } from '../../../actions/notebook_actions';


const mSTP = (state, ownProps) => {
    // debugger
    return { currentUser: state.entities.users[state.session.id] }
};

const mapDispatchToProps = dispatch => {

    return {
        createNotebook: notebook => dispatch(createNotebook(notebook))
    }
};

export default connect(mSTP, mapDispatchToProps)(CreateNotebook); 