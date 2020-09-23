import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";
import { logIn, logOut, signUp } from './util/session_util';


document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore();
    const root = document.getElementById("root");

    window.store = store;
    window.logIn = logIn;
    window.logOut = logOut;
    window.signUp = signUp;
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);

});