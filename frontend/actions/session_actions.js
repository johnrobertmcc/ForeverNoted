import * as PostApiUtil from '../util/session_util';



export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


const receiveCurrentUser = currentUser => ({ //pojo goes to reducer --always pass in actin to dispatch
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const signUp = user => dispatch => {
   return PostApiUtil.signUp(user).then(user => (dispatch(receiveCurrentUser(user))))
};
    
export const logIn = user => dispatch => (
    // debugger
    PostApiUtil.logIn(user).then(user => (dispatch(receiveCurrentUser(user)))
));

export const logOut = () => dispatch => {
    debugger
    return PostApiUtil.logOut().then(() => (dispatch(logoutCurrentUser())))
};
