import React from "react";
import SignUpFormContainer from '../components/session/sign_up_form_container';
import LogInForm from '../components/session/session_container';
import {Route} from "react-router-dom";
import HomePage from "../components/homepage";
import NavBar from "../components/navbar/navbar";

const App = () => {
    return(
        <> 
            <div>
                <NavBar/>
                <Route exact path="/signup" component={SignUpFormContainer} />
                <Route exact path="/login" component={LogInForm} />
                <Route exact path="/" component={HomePage} />
            </div>

            </>
    )
    };

export default App;

