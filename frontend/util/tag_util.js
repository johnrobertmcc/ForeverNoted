
export const fetchAllTags = (userId) => {
    return $.ajax(
        {
            url: `/api/users/${userId}/tags`,
            method: "GET"
        }
    )
}


export const fetchTagOfNote = (noteId) => {
    return $.ajax(
        {
            url: `/api/notes/${noteId}/tags`,
            method: "GET"
        }
    )
};

export const createTag = (tag) => {
    return $.ajax(
        {
            url: `/api/notes/${tag.noteId}/tags`,
            method: "POST",
            data: {tag}
        }
    )
};

export const updateTag = (tag) => {

    return $.ajax(
        {
            url: `/api/notes/${tag.noteId}/tags/${tag.id}`,
            method: "PATCH",
            data: {tag}
        }
    )
};

export const deleteTag = (tag) => {
    return $.ajax(
        {
            url: `/api/notes/${tag.noteId}/tags/tag.id`,
            method: "DELETE",
        }
    )
}
