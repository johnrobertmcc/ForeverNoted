import * as NoteUtil from '../util/note_util';


export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const receiveAllNotes= (notes) =>{
    return(
        {
            type: RECEIVE_ALL_NOTES,
            notes
        }
    )
}


export const fetchNotes = () => dispatch => {

    return NoteUtil.fetchNotes().then(notes => dispatch(receiveAllNotes(notes)));
};

const receiveNote = note => {
    return (
        {
            type: RECEIVE_NOTE,
            note
        }
    )
};

export const fetchNote = noteId => dispatch => {
    return NoteUtil.fetchNote(noteId).then(note => dispatch(receiveNote(note)))
};

export const createNote = note => dispatch => {
    return NoteUtil.createNote(note).then(note =>dispatch(receiveNote(note)));
};

export const updateNote = note => dispatch => {
    return NoteUtil.updateNote(note).then(note => dispatch(receiveNote(note)));
};

<<<<<<< HEAD
const removeNote = ({id}) => {
=======
const removeNote = noteId => {
>>>>>>> tags

    return (
        {
            type: REMOVE_NOTE,
            id
        }
    )
};

export const deleteNote = noteId => dispatch => {

    return NoteUtil.deleteNote(noteId).then(note=> dispatch(removeNote(note)))
};