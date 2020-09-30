import React from 'react';
import CreateNote from '../note/create_note_container';
import { Link } from 'react-router-dom';


//individual notebook and their notes

class NotebookIndex extends React.Component {
    constructor(props) {
        
        super(props);

    }

    componentDidMount() {
  
        this.props.fetchNotebook(this.props.notebook.id);
        
    }


    render() {


        const {notes, notebook} = this.props;

        const notesFromNotebooks = (notes.length > 0) ? (notes.map((note, idx) => {
           return (
           <Link to={`/main/${notebook.id}/note/edit/${note.id}`}>
                <li
                        className='note'
                        key={note.id}
                        >{note.title}
                </li>
             </Link>)
           
          
        }
        )) : "no notes yet!"

        return (
            <div className='notebook-full-index'>
                
                <div className='notebook-index-container'>
                        <p> {this.props.notebook.title}</p>
                        <hr className='notebook-index-line'></hr>
                        <ul className='notebook-list'>{notesFromNotebooks}</ul>
                </div>

                    {/* <CreateNote /> */}
            </div>
        )
    }

}


export default NotebookIndex;