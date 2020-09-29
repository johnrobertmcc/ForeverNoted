import React from "react";
import SignUpFormContainer from '../components/session/sign_up_form_container';
import LogInContainer from '../components/session/session_container';
import {Route} from "react-router-dom";
import HomePage from "../components/homepage_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from '../components/mainpage/mainpage_container';



const App = () =>{
    
    return(
        <div> 
                
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInContainer} />
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute path='/main' component={MainPageContainer}/>

        </div>
    )
};
    

export default App;

