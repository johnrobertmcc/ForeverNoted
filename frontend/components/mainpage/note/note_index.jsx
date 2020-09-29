import React from 'react';
// import Datetime from 'react-datetime';

class NoteIndex extends React.Component {
    constructor(props) {
        super(props);  
    }

    componentDidMount() {

        this.props.fetchNotes(this.props.currentUser.id);
    }

    currentDate(date){
        let temp =  new Date().getMinutes();
        if ((temp - date) === 1) {
            return ((temp-date) + " minute ago")
        } else {
            return ((temp-date) + " minutes ago")
        }   
    }
    
    noteIndex() {
        let {notes} = this.props;
        let date = new Date().getMinutes();

        if(notes.length > 0){
            return notes.map((note, i) => (
                <div className='ind-note'>

               <li 
                    key={note.id}
               >
                    {note.title}
                </li>

               <li 
                    className='note-body'
                    key={i+11}
               >
                   {note.body}</li>
                <li 
                    className="date"
                    key={i}
                >
                    {this.currentDate(date)}
                </li>
            </div>
            ))
        }else{
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
            <div className='note-index-container'>
                <h3>All Notes</h3>

                <p className="note-count">{noteCount()}</p>

                <hr className="note-index-line"></hr>

                <ul className="note-index">{this.noteIndex()}</ul>
                {/* //clicking link will open edit in rich text editor */}
            </div>
        )
    }
}


export default NoteIndex;