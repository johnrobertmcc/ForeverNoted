import * as NoteBookUtil from '../util/notebook_util';


export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

const receiveAllNotes = (notebooks) => {
    return (
        {
            type: RECEIVE_ALL_NOTEBOOKS,
            notebooks
        }
    )
}

export const fetchNotebook = () => dispatch => {

    return NoteBookUtil.fetchNotebook().then(notebooks => dispatch(receiveAllNotes(notebooks)));
};

const receiveNotebook = notebook => {
    return (
        {
            type: RECEIVE_NOTEBOOK,
            notebook
        }
    )
};

export const fetchNotebook = notebookId => dispatch => {
    return NoteBookUtil.fetchNote(notebookId).then(notebook => dispatch(receiveNotebook(notebook)))
};

export const createNote = notebook => dispatch => {
    return NoteBookUtil.createNote(notebook).then(notebook => dispatch(receiveNotebook(notebook)));
};

export const updateNote = notebook => dispatch => {
    return NoteBookUtil.updateNote(notebook).then(notebook => dispatch(receiveNotebook(notebook)));
};

const removeNote = notebookId => {
    return (
        {
            type: REMOVE_NOTEBOOK,
            notebookId
        }
    )
};

export const deleteNote = notebookId => dispatch => {
    return NoteBookUtil.deleteNote(notebookId).then(notebookId => dispatch(removeNote(notebookId)))
};