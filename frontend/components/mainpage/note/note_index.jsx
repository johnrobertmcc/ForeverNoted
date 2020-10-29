import React from 'react';
import { Link } from 'react-router-dom';    
import Moment from 'react-moment';


class NoteIndex extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {
            filtered: this.props.fetchNotes(this.props.currentUser.id),
            searched: false
        }
        // this.handleDelete = this.handleDelete.bind(this)
         this.handleChange = this.handleChange.bind(this);
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

    
      sortByEdited(notes){
        if(notes.length > 1){
        return notes[0].id < notes[1].id ? notes.reverse() : notes
        }else{
            return notes
        }
        // return notes
    }

    noteIndex() {
        let { notes, deleteNote } = this.props;

        let allNotes;
        debugger

        this.state.searched ? allNotes = this.state.filtered :  allNotes = notes;
        
        
        if (allNotes.length > 0) {
            
            let sortedNotes = this.sortByEdited(allNotes)
            return sortedNotes.map((note, i) => (
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
        let {notes} = this.props

        let currentList = [];

        if (e.target.value !== "") {

            for(let i = 0; i < notes.length; i++){
                debugger
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
        let { notes } = this.props;
        let allNotes;
        this.state.searched ? allNotes = this.state.filtered :  allNotes = notes;
        let noteCount = () => {
            if (allNotes.length === 1) {
                return (allNotes.length + " note")
            } else {
                return (allNotes.length + " notes")
            }
        }

        if (typeof notes === 'undefined') return null;


        return(

            <div className='allnotes'>
                <div className='note-index-container'>
                    <div className='note-header'>
                        <h3>All Notes</h3>
                            <p className="note-count">{noteCount()}</p>
                               
                        <div className='searchbarcontainer'>
                            <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                        </div>

                                <hr className="note-index-line"></hr>

                            <ul className="note-index">{this.noteIndex()}</ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default NoteIndex;