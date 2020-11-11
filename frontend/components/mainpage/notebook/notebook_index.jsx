import React from 'react';
import AllNotesIndex from '../note/all_notes_index';


//individual notebook and their notes

class NotebookIndex extends React.Component {
    constructor(props) {

       super(props);

    }

    render() {

        debugger

        return( 
        <AllNotesIndex notes={this.props.notebook.notes} action={this.props.location.state.action}/>
        )
    }

}


export default NotebookIndex;