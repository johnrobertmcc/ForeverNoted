import React from "react";
import SignUpFormContainer from '../components/session/sign_up_form_container';
import LogInForm from '../components/session/log_in_form';
import {Route} from "react-router-dom"
import HomePage from "../components/homepage"


const App = () => (
    <div>
        <header>
            <h1>ForeverNoted</h1>
            {LogInForm}
            <h2> and this</h2>
        </header>
        {/* <h1>please work</h1> */}
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/login" component={LogInForm} />
        {/* <Route path='/home' component={HomePage} /> */}
    </div>
);

export default App;

