import React from 'react';

class NoteIndex extends React.Component {
    constructor(props) {
        // debugger
        super(props);  
    }

    componentDidMount() {

        this.props.fetchNotes();
    }

    render() {
        // debugger
        // if (this.props.notes.length == 0) {
        //     return <span>No notes yet!</span>;
        // }

        return(
            <div>nothing yet</div>
        )
    }
}


export default NoteIndex;