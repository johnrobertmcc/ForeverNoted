import React from "react";
import SignUpFormContainer from '../components/session/sign_up_form_container';
import LogInContainer from '../components/session/session_container';
import {Route, Switch} from "react-router-dom";
import HomePage from "../components/homepage_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from '../components/mainpage/mainpage_container';
import NoteIndex from './mainpage/note/notes_index_container';
import NoteBookIndex from './mainpage/notebook/notebook_index_container';


const App = () =>{
    
    return(
        <div> 
                
            <Switch>
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                <AuthRoute exact path="/login" component={LogInContainer} />
                <Route exact path="/" component={HomePage} />
                <ProtectedRoute exact path='/main' component={MainPageContainer}/>
                <Route exact path='/notes' component={NoteIndex}/>
                <Route exact path='/notebooks' component={NoteBookIndex}/>
            </Switch>

        </div>
    )
};
    

export default App;

