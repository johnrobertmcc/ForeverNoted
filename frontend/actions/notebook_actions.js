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

export const fetchNotebooks = (id) => dispatch => {


    return NoteBookUtil.fetchNotebooks(id).then(notebooks => dispatch(receiveAllNotes(notebooks)));
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

    return NoteBookUtil.fetchNotebook(notebookId).then(notebook => {
  
         return dispatch(receiveNotebook(notebook))
    })
};

export const createNotebook = notebook => dispatch => {
    return NoteBookUtil.createNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)));
};

export const updateNotebook = notebook => dispatch => {
    return NoteBookUtil.updateNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)));
};

const removeNotebook = notebookId => {
    return (
        {
            type: REMOVE_NOTEBOOK,
            notebookId
        }
    )
};

export const deleteNote = notebookId => dispatch => {
    return NoteBookUtil.deleteNotebook(notebookId).then(notebookId => dispatch(removeNotebook(notebookId)))
};