// fetchNotes
// fetchNote
// createNote
// updateNote
// destroyNote

export const fetchNotebooks = () => {
    return $.ajax(
        {
            url: '/api/notebooks',
            method: "GET"
        }
    )
};

export const fetchNotebook = (notebookId) => {
    return $.ajax(
        {
            url: `/api/notebooks/${notebookId}`,
            method: "GET"
        }
    )
};

export const createNotebook = (notebook) => {
    return $.ajax(
        {
            url: `/api/notebooks`,
            method: "POST",
            { notebook }
        }
    )
};

export const updateNotebook = (notebook) => {
    return $.ajax(
        {
            url: `/api/notebooks/${notebook.id}`,
            method: "PATCH",
            { notebook }
        }
    )
};

export const deleteNotebook = (notebookId) => {
    return $.ajax(
        {
            url: `/api/notebooks/${notebookId}`,
            method: "DELETE",
        }
    )
;}
 xc