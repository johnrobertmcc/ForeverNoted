import React from 'react';
import AllNotesIndex from '../note/all_notes_index';


//individual notebook and their notes

class NotebookIndex extends React.Component {
    constructor(props) {
        
       super(props);

    }

    render() {


        return( 
        <AllNotesIndex notes={this.props.notebook.notes}/>
        )
    }

}


export default NotebookIndex;