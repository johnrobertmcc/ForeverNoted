// this will hold the side bar Component, as well as the notes and notebook forms

import React from 'react';
import NotebookIndex from './notebook/notebook_index_container';
import CreateNote from './note/create_note_container';

class MainPage extends React.Component{

    constructor(props){
        super(props);
        // this.editorSwitch = this.editorSwitch.bind(this)
    }


    editorSwitch(string){

        switch (string) {

            case 'note':
                return <CreateNote />;

            case 'notebook':
                return <CreateNote />;
                
            default:
                return <NotebookIndex />;
            
            }

    }



    render(){

        const {logOut} = this.props;

        const note = 'note';
        const notebook = 'notebook';

        return(

            <div className='homepage'>
                        
                    <div className="sidebar">
        
                    <p className='user-info'>
                        <i className="fa fa-pagelines" aria-hidden="true"></i>
                        <span className='username'> {this.props.currentUser.email}</span>
                         
                    </p>
                    <button
                        onClick={logOut}
                    >LogOut</button>

                                <ul>
                                    <li>
                                        <button
                                            // onClick={this.editorSwitch(note)}
                                            className="newnote-btn"
                                        >
                                        <span className='plus'>+</span> New Note</button>
                                    </li>

                                    <li className='links-home'>
                                        <button
                                            className='btn-home'
                                            // onClick={this.editorSwitch(note)}
                            ><i className="fa fa-sticky-note-o" aria-hidden="true"></i>All Notes</button>
                                    </li>

                                    <li className='links-home'>
                                        <button
                                            className='btn-home'
                                            // onClick={this.editorSwitch(notebook)}
                            ><i className="fa fa-book" aria-hidden="true"></i>All Notebooks</button>

                                    </li>
        
                                </ul>

                    </div>

                    <div className='editor'>

                       {this.editorSwitch()}

                    </div>
                
 
            </div>
        )

    }


};


export default MainPage;