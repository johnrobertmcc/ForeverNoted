import React from 'react';
import CreateNote from '../note/create_note_container';


class SideBar extends React.Component{

    render(){


        return(
        <div>
            search bar

            <button>new note</button>
            <CreateNote />

            <a>all notes</a>


            <a>my notebooks</a>



        </div>)
    }
}


export default SideBar;