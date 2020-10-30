import React from 'react';
import CreateNote from '../note/create_note_container';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'; 


//individual notebook and their notes

class NotebookIndex extends React.Component {
    constructor(props) {
        
       super(props);

        this.state = {
            filtered: this.props.notebook.notes,
            searched: false
        }
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        this.props.fetchNotebook(this.props.notebook.id);
    }

    currentDate(date) {
        let temp = new Date().getMinutes();
        if ((temp - date) === 1) {
            return ((temp - date) + " minute ago")
        } else {
            return ((temp - date) + " minutes ago")
        }
    }

    createMarkup(idx){
        return { __html: this.props.notebook.notes[idx].body }
    }

    sortByEdited(notes){
        if(notes.length > 1){
            return notes.sort(function(a, b){
                return a.updated_at > b.updated_at ? -1 : 1;
            })

        }else{
            return notes
        }
    }

    notesFromNotebooks(){

        const {notebook, deleteNote} = this.props;
        let {notes} = this.props.notebook;

        let allNotes;

        this.state.searched ? allNotes = this.state.filtered :  allNotes = notes;

         if (allNotes.length > 0) {
            
            let sortedNotes = this.sortByEdited(allNotes)

            return sortedNotes.map((note, i) => (
                <div className='ind-note' key={note.id}>

                    <Link to={`/main/notebooks/${notebook.id}/note/edit/${note.id}`}>

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


    handleChange(e) {
        let {notes} = this.props.notebooks

        let currentList = [];

        if (e.target.value !== "") {

            for(let i = 0; i < notes.length; i++){
    
            if(notes[i].title.includes(e.target.value)){
                currentList.push(notes[i])
            }else if(notes[i].body.includes(e.target.value) && !currentList.includes(notes[i])){
                currentList.push(notes[i])
            }
        }

    
        console.log(currentList)    
       ;
        } else {
        currentList = notes;
        };

        this.setState({
        filtered: currentList,
        searched: true
        });
    }



    render() {
        let {notes} = this.props.notebook;

        let noteCount = () => {
            if (notes.length === 1) {
                return (notes.length + " note")
            } else {
                return (notes.length + " notes")
            }
        }

        return (
            <div className='allnotes'>
                <div className='note-index-container'>

                    <div className='note-header'>
                            <h3> {this.props.notebook.title}</h3>
                            
                            <p className="note-count">{noteCount()}</p>

                            <div className='searchbarcontainer'>
                                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                            </div>

                            <hr className='note-index-line'></hr>
                            
                            <ul className='note-index'>{this.notesFromNotebooks()}</ul>
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