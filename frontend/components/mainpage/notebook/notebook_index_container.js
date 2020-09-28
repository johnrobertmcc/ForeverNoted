import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { fetchNotebooks } from '../../../actions/notebook_actions';

const mapStateToProps = (state) => {

    return {
        notebooks: Object.values(state.entities.notebooks),
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => {

    return { fetchNotebooks: () => dispatch(fetchNotebooks()) }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex); 