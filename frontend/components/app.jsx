import React from "react";
import SignUpFormContainer from '../components/session/sign_up_form_container';
import LogInContainer from '../components/session/session_container';
import {Route, Switch} from "react-router-dom";
import HomePage from "../components/homepage";
import { AuthRoute } from '../util/route_util';

const App = () =>{
    
    return(
        <div> 
                
            <Switch>
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                <AuthRoute exact path="/login" component={LogInContainer} />
                <Route exact path="/" component={HomePage} />
            </Switch>

        </div>
    )
};
    

export default App;

