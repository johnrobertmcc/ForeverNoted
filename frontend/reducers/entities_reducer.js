import { combineReducers } from "redux";
import NotebookReducer from "./notebook_reducer";
import NotesReducer from "./note_reducer";

import usersReducer from "./user_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    notes : NotesReducer,
    notebooks : NotebookReducer
});

export default entitiesReducer;