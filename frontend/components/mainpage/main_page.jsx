// this will hold the side bar Component, as well as the notes and notebook forms

import React from 'react';
import SideBar from './sidebar/sidebar_form';
import Editor from './editor';
import NoteIndex from './note/notes_index_container';
import NotebookIndex from './notebook/notebook_index_container';

class MainPage extends React.Component{

    constructor(props){
        debugger
    
        super(props)
    }


    render(){

        return(

            <div>
            <div className='main-top-level'>
                    
                <div className="sidebar">
                    {/* side bar component */}
                        <h1>username </h1>

                        <div>
                            <SideBar />
                        </div>

                </div>
                
                <div className="inner-sidebar">
                <h1>All Notes</h1>
                <NoteIndex />

                {/* has a switch that shows either note index or notebook index */}
                {/* shows notes or notesbooks, depending on the switch insdie of the inner sidebar modal */}
               
                <h1>All Notebooks</h1>
                <NotebookIndex />

                </div>

                {/* <div className="notes-show"> */}
                    {/* rich text editing modal */}

                    {/* modal is going to show either:
                    edit note
                    new note
                    notebook
                    based on a switch inside of the editor function
                     */}

                     <Editor />
                    <h1></h1>
                    <br></br>
                    <hr></hr>
    

                {/* </div> */}
            
            </div>
            </div>
        )

    }


};


export default MainPage;