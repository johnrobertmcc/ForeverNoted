// this will hold the side bar Component, as well as the notes and notebook forms

import React from 'react';
import NotebookIndex from './notebook/notebook_index_container';
import CreateNote from './note/create_note_container';
import SideBar from './sidebar/sidebar_container';
import { ProtectedRoute } from '../../util/route_util';
import { Route, Switch } from "react-router-dom";


const MainPage = () => {

    return (
        <div>

            {/* <SideBar /> */}
            {/* <Switch> */}
                <ProtectedRoute exact path='/notes' component={CreateNote} />
                <ProtectedRoute exact path='/notebooks' component={NotebookIndex} />
            {/* </Switch> */}
            {/* <CreateNote /> */}

        </div>
    )
};


export default MainPage;