// this will hold the side bar Component, as well as the notes and notebook forms

import React from 'react';
import NotebookIndex from './notebook/notebook_index_container';
import CreateNote from './note/create_note_container';
import SideBar from './sidebar/sidebar_container';
import { Route } from "react-router-dom";


const MainPage = () => {
    
    return (
        <div className='mainpage'>
            <SideBar />
            <Route exact path='/main/notes' component={CreateNote} />
            <Route exact path='/main/notebooks' component={NotebookIndex} />            
        </div>
    )
};

export default MainPage;