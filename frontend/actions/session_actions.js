import * as PostApiUtil from '../util/session_util'



export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// switch (action.type) { //receiveCurrentUser.
//     // RECEIVE_CURRENT_USER
//     case RECEIVE_CURRENT_USER:
//         //does something        
//         // break;

//     default:
//         break;
// }

const receiveCurrentUser = currentUser => ({ //pojo goes to reducer --always pass in actin to dispatch
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const signUp = user => dispatch => (
    PostApiUtil.signUp(user).then(user => (
        dispatch(receiveCurrentUser(user))
    )
);

export const logIn = user => dispatch => (
    PostApiUtil.logIn(user).then(user => (
        dispatch(receiveCurrentUser(user))
    )
);

export const logOut = () => dispatch => (
    PostApiUtil.logOut().then(user => (
        dispatch(logoutCurrentUser())
    ))
);
