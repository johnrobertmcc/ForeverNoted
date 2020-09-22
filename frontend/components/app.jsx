import React from "react";
import SignUpFormContainer from '../components/session/sign_up_form_container';
import {Route} from "react-router-dom"
const App = () => (
    <div>
        <h1>ForeverNoted</h1>
        {/* <h1>please work</h1> */}
        <Route exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;

