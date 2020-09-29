import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from './app';
import {AuthRoute} from '../util/route_util';
import SignUpFormContainer from '../components/session/sign_up_form_container';
import LogInContainer from '../components/session/session_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>

);
export default Root;