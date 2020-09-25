// fetchNotes
// fetchNote
// createNote
// updateNote
// destroyNote

import { $CombinedState } from "redux"

export const fetchNotes = () => {
    return $.ajax(
        {
            url: '/api/notes',
            method: "GET"
        }
    )
}

export const fetchNote = (noteId) => {
    return $.ajax(
        {
            url: `/api/notes/${noteId}`,
            method: "GET"
        }
    )
};

export const createNote = (note) => {
    return $.ajax(
        {
            url: `/api/notes`,
            method: "POST",
            {note}
        }
    )
};

export const updateNote = (note) => {
    return $.ajax(
        {
            url: `/api/notes/${note.id}`,
            method: "PATCH",
            {note}
        }
    )
};

export const destroyNote = (noteId) => {
    return $.ajax(
        {
            url: `/api/notes/${noteId}`,
            method: "DELETE",
        }
    )
}
