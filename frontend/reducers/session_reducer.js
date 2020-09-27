import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';


const _default = { id: null };

const sessionReducer = (state = _default, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            
            return { id: action.currentUser.id };

        case LOGOUT_CURRENT_USER:

            return _default;

        case RECEIVE_SESSION_ERRORS:
            return action.errors;

        default:
            return state;
    }
};

export default sessionReducer;