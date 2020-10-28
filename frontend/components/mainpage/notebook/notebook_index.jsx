import React from 'react';
import CreateNote from '../note/create_note_container';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'; 


//individual notebook and their notes

class NotebookIndex extends React.Component {
    constructor(props) {
        
        super(props);

    }

    componentDidMount() {
        this.props.fetchNotebook(this.props.notebook.id);
        
    }

    createMarkup(idx){
        return { __html: this.props.notebook.notes[idx].body }
    }


    render() {

        const {notebook, deleteNote} = this.props;
        let {notes} = this.props.notebook;

        const notesFromNotebooks = (notes.length > 0) ? (notes.reverse().map((note, idx) => {
           return (
            <div className='ind-note' key={note.id}>

                <Link to={`/main/notebooks/${notebook.id}/note/edit/${note.id}`}>
                    <li
                            className='note-link'
                            >{note.title}
                    </li>

                    <li className='note-body'>
                        <div dangerouslySetInnerHTML={this.createMarkup(idx)} />
                    </li>

                    <li
                        className="date"
                        >
                        <Moment fromNow ago>{note.created_at}</Moment>
                    </li>

                </Link> 
                    <li>
                        <button 
                        onClick={() => deleteNote(note.id)}
                        className='delete-btn'>
                            <i className="fas fa-trash"></i>
                        </button>
                    </li>
   
            </div>)
           
          
        }
        )) : "no notes yet!"

        let noteCount = () => {
            if (notes.length === 1) {
                return (notes.length + " note")
            } else {
                return (notes.length + " notes")
            }
        }

        return (
            <div className='all-notes'>
                <div className='note-index-container'>

                    <div className='note-header'>
                            <h3> {this.props.notebook.title}</h3>
                            
                            <p className="note-count">{noteCount()}</p>

                            <hr className='note-index-line'></hr>
                            
                            <ul className='note-index'>{notesFromNotebooks}</ul>
                    </div>    
                </div>
                <div className='allnotes-create-form'>
                    <CreateNote />
                </div>
            </div>
        )
    }

}


export default NotebookIndex;