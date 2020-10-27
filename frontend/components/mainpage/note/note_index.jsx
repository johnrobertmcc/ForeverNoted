import React from 'react';
import { Link } from 'react-router-dom';    
import Moment from 'react-moment';


class NoteIndex extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = this.props.fetchNotes(this.props.currentUser.id);
        // this.handleDelete = this.handleDelete.bind(this)
    }


    componentDidUpdate(prevProps, prevState) {
        if(prevProps.notes.length !== this.props.notes.length){
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

    // handleDelete(id){
    //     this.props.deleteNote(id);
    //     // this.setState(this.props.fetchNotes(this.props.currentUser.id))
    // }

    
    noteIndex() {
        let { notes, deleteNote } = this.props;

        if (notes.length > 0) {
            return notes.reverse().map((note, i) => (
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
                            <Moment fromNow ago>{note.created_at}</Moment>
                        </li>
                    </Link>

                    <li>
                        <button
                            onClick={deleteNote}
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

        if (typeof notes === 'undefined') return null;

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