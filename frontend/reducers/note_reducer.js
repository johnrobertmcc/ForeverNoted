import { RECEIVE_NOTE, RECEIVE_ALL_NOTES, REMOVE_NOTE } from "../actions/note_actions";
import {RECEIVE_NOTEBOOK} from '../actions/notebook_actions';

const NotesReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_NOTE:
            return Object.assign({}, state, {[action.note.id] : action.note});
        
        case RECEIVE_ALL_NOTES:
            return Object.assign({}, state, action.notes)
            // return action.notes

        case RECEIVE_NOTEBOOK:
            return action.notebook.notes;

        case REMOVE_NOTE:
    
            const temp = Object.assign({}, state)
            delete temp[action.noteId];
            return temp;
        default:
            return state;
    }
}

export default NotesReducer;