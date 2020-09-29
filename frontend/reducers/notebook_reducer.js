import { RECEIVE_NOTEBOOK, RECEIVE_ALL_NOTEBOOKS, REMOVE_NOTEBOOK } from "../actions/notebook_actions";

const NotebookReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_NOTEBOOK:
            return Object.assign({}, state, { [action.notebook.id]: action.notebook })

        case RECEIVE_ALL_NOTEBOOKS:
            return action.notebooks;

        case REMOVE_NOTEBOOK:
            const temp = Object.assign({}, state)
            delete temp[action.notebookId]
            return temp;

        default:
            return state;
    }
}

export default NotebookReducer;