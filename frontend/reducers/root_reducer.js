import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import usersReducer from './user_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers(
    { session : sessionReducer, user : usersReducer, errors : errorsReducer }
);

export default rootReducer;