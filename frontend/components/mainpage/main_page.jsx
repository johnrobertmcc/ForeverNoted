// this will hold the side bar Component, as well as the notes and notebook forms

import React from 'react';
import NoteIndex from './note/notes_index_container';
import NotebookIndex from './notebook/notebook_index_container';
import CreateNote from './note/create_note_container';

class MainPage extends React.Component{

    constructor(props){
        super(props)
    }



    render(){

        const editorSwitch = (string) => {

            switch(string) {

            case "Note":
                return <CreateNote /> 

            case "Notebook":
                return <NotebookIndex />
        
            default:
                return<NoteIndex />;
        }

    }

    
        return(

            <div>
                <div className='main-top-level'>
                        
                    <div className="sidebar">
        
                            <h1>username </h1>

                                <ul>
                                    <li>
                                        <button
                                            onClick={editorSwitch('note')}
                                        >
                                        New Note</button>
                                    </li>

                                    <li>
                                        <button
                                    onClick={editorSwitch('note')}
                                        >All Notes</button>
                                    </li>

                                    <li>
                                        <button
                                    onClick={editorSwitch('notebook')}
                                        >All Notebooks</button>

                                    </li>
        
                                </ul>

                    </div>

                    <div className='editor'>

                       {editorSwitch()}

                    </div>
                
                </div>
            </div>
        )

    }


};


export default MainPage;