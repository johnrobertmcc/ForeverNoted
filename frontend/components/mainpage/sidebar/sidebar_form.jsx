import React from 'react';
import CreateNote from '../note/create_note_container';



class SideBar extends React.Component{

    switchEditor(str){


    }


    render(){


        return(
        <div>
            <ul>

                <li>
                    <button
                    // onClick={this.SwitchEditor("note")}
                    >
                        new note
                    </button>
                </li>   
                {/* link to create note, opens create note in editor */}
            


                <li>
                    <a
                    
                    >
                        all notes
                    </a>

                    
                </li>
                {/* button to note index, button opens up note in editor and changes inner sidebar */}

                <li>
                    <a>my notebooks</a>

                </li>
                {/* button to notebook index, button opens up notebook in editor */}



            </ul>
        </div>    
        )
    }
}


export default SideBar;