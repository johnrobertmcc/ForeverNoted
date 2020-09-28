// this will hold the side bar Component, as well as the notes and notebook forms

import React from 'react';
import NotebookIndex from './notebook/notebook_index_container';
import CreateNote from './note/create_note_container';

class MainPage extends React.Component{

    constructor(props){
        super(props);
    }



    render(){
        // debugger
        const {logOut} = this.props

        const editorSwitch = (string) => {

            switch(string) {

            case "Note":
                return <CreateNote />;

            case "Notebook":
                return <NotebookIndex />;
        
            default:
                return <CreateNote />;
            }

        }


        return(

            <div className='homepage'>
                        
                    <div className="sidebar">
        
                    <p className='user-info'>
                        <i className="fa fa-pagelines" aria-hidden="true"></i>
                        {/* <span className='username'> {this.props.users[this.props.session.id]}</span> */}
                         
                    </p>
                    <button
                        onClick={logOut}
                    >LogOut</button>

                                <ul>
                                    <li>
                                        <button
                                            // onClick={editorSwitch('note')}
                                            className="newnote-btn"
                                        >
                                        <span className='plus'>+</span> New Note</button>
                                    </li>

                                    <li className='links-home'>
                                        <button
                                            className='btn-home'
                                            // onClick={editorSwitch('note')}
                            ><i className="fa fa-sticky-note-o" aria-hidden="true"></i>All Notes</button>
                                    </li>

                                    <li className='links-home'>
                                        <button
                                            className='btn-home'
                                            // onClick={editorSwitch('notebook')}
                            ><i className="fa fa-book" aria-hidden="true"></i>All Notebooks</button>

                                    </li>
        
                                </ul>

                    </div>

                    <div className='editor'>

                       {editorSwitch()}

                    </div>
                
 
            </div>
        )

    }


};


export default MainPage;