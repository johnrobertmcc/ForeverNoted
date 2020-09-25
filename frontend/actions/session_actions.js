import * as PostApiUtil from '../util/session_util';



export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const receiveCurrentUser = currentUser => ({ //pojo goes to reducer --always pass in actin to dispatch
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const signUp = user => dispatch => {
   return PostApiUtil.signUp(user).then(user => dispatch(receiveCurrentUser(user)),
   error => dispatch(receiveErrors(error.responseJSON)));
};
    
export const logIn = user => dispatch => (

    PostApiUtil.logIn(user).then(user => (dispatch(receiveCurrentUser(user))),
        error => dispatch(receiveErrors(error.responseJSON))
)
)

export const logOut = () => dispatch => {
 
    return PostApiUtil.logOut().then(() => (dispatch(logoutCurrentUser())))
};

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_ERRORS
});