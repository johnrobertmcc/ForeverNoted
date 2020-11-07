import {connect} from 'react-redux';
import TagModal from './tag_modal';
import {createTag} from '../../../actions/tag_actions';


const mSTP = (state, ownProps) => {

    return {

        tags: state.entities.tags,
        currentUser: state.entities.users[state.session.id],
        notes: Object.values(state.entities.notes)
    }

}
const mapDispatchToProps = dispatch => {

    return {
        createTag: tag => dispatch(createTag(tag))
    }
};

export default connect(mSTP, mapDispatchToProps)(TagModal); 
