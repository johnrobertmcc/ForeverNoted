// this will hold the side bar Component, as well as the notes and notebook forms

import React from 'react';
import NotebookIndex from './notebook/notebook_index_container';
import SideBar from './sidebar/sidebar_container';
import { Route } from "react-router-dom";
import AllNotebookIndex from './notebook/all_notebook_index';
import AllNotesIndex from './note/all_notes_index';


const MainPage = () => {
    
    return (
        <div className='mainpage'>
            <SideBar />
            <Route exact path='/main/notes' component={AllNotesIndex} />
            <Route exact path='/main/allnotebooks' component={AllNotebookIndex} />            
            <Route exact path='/main/notebooks/:notebookId/notes' component={NotebookIndex} />        
        </div>
    )
};

export default MainPage;

// this.prop.match.params.location