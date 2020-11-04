import * as TagUtil from '../util/tag_util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';


const receiveAllTags = tags => {

    return(
        {
            type: RECEIVE_ALL_TAGS,
            tags
        }
    )
}

export const fetchAllTags = (userId) => dispatch => {
    return NoteUtil.fetchAllTags(userId).then(tags => dispatch(receiveAllTags(tags)))
}

const receiveTag = tag => {
    return (
        {
            type: RECEIVE_TAG,
            tag
        }
    )
}

export const fetchTag = noteId => dispatch => {
    return TagUtil.fetchTagOfNote(noteId).then(tag => dispatch(receiveTag(tag)))
}

export const createTag = tag => dispatch => {
    return TagUtil.createTag(tag).then(tag => dispatch(receiveTag(tag)))
}

export const updateTag = tag => dispatch => {
    return TagUtil.updateTag(tag).then(tag => dispatch(receiveTag(tag)))
}

const removeTag = tagId => {
    return (
        {
            type: REMOVE_TAG,
            tagId
        }
    )
};

export const deleteTag = tag => dispatch => {
    return NoteUtil.deleteTag(tag.id).then(tag=> dispatch(removeTag(tag)))
};