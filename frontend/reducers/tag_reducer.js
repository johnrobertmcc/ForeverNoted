import { RECEIVE_TAG, RECEIVE_ALL_TAGS, REMOVE_TAG } from "../actions/tag_actions";

const TagsReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TAG:
            return Object.assign({}, state, {[action.tag.id] : action.tag});
        
        case RECEIVE_ALL_TAGS:
            return action.tags;

        case REMOVE_TAG:
            const temp = Object.assign({}, state)
            delete temp[action.tagId];
            return temp;
            
        default:
            return state;
    }
}

export default TagsReducer;