import React from 'react';
import { deleteNote } from '../../../actions/note_actions';
import EditForm from './edit_note_container.jsx';
// import Datetime from 'react-datetime';
import { Link } from 'react-router-dom';    


class NoteIndex extends React.Component {
        constructor(props) {
            super(props);

            this.state = this.props.fetchNotes(this.props.currentUser.id);
        }

        // componentDidMount() {

        //     this.props.fetchNotes(this.props.currentUser.id);
        // }

        componentDidUpdate(prevProps, prevState) {

            if (prevProps.notes.length !== this.props.notes.length) {
                this.props.fetchNotes(this.props.currentUser.id);
            }
        }

    currentDate(date){
        let temp =  new Date().getMinutes();
        if ((temp - date) === 1) {
            return ((temp-date) + " minute ago")
        } else {
            return ((temp-date) + " minutes ago")
        }   
    }


    createMarkup(idx) {
        return { __html: this.props.notes[idx].body }
    }

    
    noteIndex() {
        let { notes, deleteNote } = this.props;
        let date = new Date().getMinutes();


        if (notes.length > 0) {
            return notes.map((note, i) => (
                <div className='ind-note' key={note.id}>

                    <Link to={`/main/notebooks/${note.notebook_id}/note/edit/${note.id}`}>

                        <li
                            className='note-link'
                        >
                            {note.title}
                        </li>


                        <li className='note-body'>
                            <div dangerouslySetInnerHTML={this.createMarkup(i)} />
                        </li>

                        <li
                            className="date"

                        >
                            {this.currentDate(date)}
                        </li>
                    </Link>

                    <li>
                        <button
                            onClick={() => deleteNote(note.id)}
                            className='delete-btn'>
                            <i className="fas fa-trash"></i>
                        </button>
                    </li>
                </div>
            ))
        } else {
            return "no notes yet!"
        }

    }

    render() {
        let {notes} = this.props;
        let noteCount = () =>{
            if(notes.length === 1){
                return (notes.length + " note") 
            }else{
                return (notes.length + " notes")
            }
        }
        

        return(

            <div className='allnotes'>
                <div className='note-index-container'>
                    <div className='note-header'>
                    <h3>All Notes</h3>

                    <p className="note-count">{noteCount()}</p>

                    <hr className="note-index-line"></hr>

                    <ul className="note-index">{this.noteIndex()}</ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default NoteIndex;