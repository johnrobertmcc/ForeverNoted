import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers/root_reducer';


const logger = createLogger();

let middleware = [];

if (process.env.NODE_ENV === 'development') {
middleware = [...middleware, thunk, logger];
} else {
middleware = [...middleware, thunk];
}

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middleware)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
);

export default configureStore;
