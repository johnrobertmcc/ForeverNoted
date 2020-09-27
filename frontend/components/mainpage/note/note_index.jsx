import React from 'react';

class NoteIndex extends React.Component {
    constructor(props) {
   
        super(props);  
    }

    componentDidMount() {

        this.props.fetchNotes();
    }

    notebookIndex() {
        let {notes} = this.props;

        if(notes.length > 0){
            return notes.map(note => (
               <li>{note.title}</li>
            ))
        }else{
            return "no notes yet!"
        }

    }

    render() {
        

        return(
            <div>
                <ul>{this.notebookIndex()}</ul>
            </div>
        )
    }
}


export default NoteIndex;