import React from "react";
import SignUpFormContainer from '../components/session/sign_up_form_container';
import LogInContainer from '../components/session/session_container';
import {Route, Switch} from "react-router-dom";
import HomePage from "../components/homepage";
import NavBar from "../components/navbar/navbar";
import DropDown from "./navbar/dropdown";

const App = () =>{
    
    // debugger
    return(
        <div> 
                
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/signup" component={SignUpFormContainer} />
                <Route exact path="/login" component={LogInContainer} />
            </Switch>

        </div>
    )
};
    

export default App;

