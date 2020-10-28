import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, updateNote, fetchNotes, deleteNote } from '../../../actions/note_actions';
import {fetchNotebooks} from '../../../actions/notebook_actions';
import ReactQuill from 'react-quill';
import NoteIndex from './notes_index_container';

class EditNote extends React.Component {


    constructor(props) {
        super(props);


        this.state = this.props.note;

        this.formats = [

            'font',
            'size',
            'bold', 'italic', 'underline', 'strike', 'code', 'blockquote',
            'list', 'bullet',
            'align',
            'color', 'background'
        ];


        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateQuill = this.updateQuill.bind(this);
    }


    // componentDidMount(){
    //     this.props.fetchNotebooks(this.props.currentUser.id);
    // }

    componentDidUpdate(prevProps){
        // /is url matches note
        if(this.props.note.id !== prevProps.note.id ){
            this.props.fetchNote(this.props.noteId)
            this.setState(this.props.note)
        };

        
    }

    createMarkupBody() {
        return { __html: this.props.note.body }
    }

    createMarkupTitle() {
        return { __html: this.props.note.title }
    }


    update(str) {

        return (e) => {

            this.setState(
                { [str]: e.target.value }
            );
        };

    }

    updateQuill(html){

        return this.setState(
            {body: html}
        ) 
    
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.updateNote(this.state);
    }

    notebookList(){
        let {notebooks} = this.props;

        notebooks.map(notebook => {
            return (
                <li>
                    {notebook.title}
                </li>
            )})
    }

    render() {

       const modules = {
                toolbar: [
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code"],
                    [
                        {
                            list: "ordered"
                        },
                        {
                            list: "bullet"
                        },
                    ],
                    [{ 'color': [] }, { 'background': [] }],
                ]
            };


 


        return( 
            
            <div className="create-note-main">

                <div>
                    <NoteIndex />
                </div>
                <div className='note-editor'>
                    <form
                        className="note-form"
                        onSubmit={this.handleSubmit}>
                        <div className='create-head'>
                        </div>


                        <input
                            type="text"
                            className='header-title'
                            id="note-title"
                            onChange={this.update('title')}
                            value={this.state.title}
                        />

                        <button className='create-btn'>Edit Note</button>
                               <select id="notebooks" name="notebooks">
                            <option>{this.notebookList()}</option>
                        </select>
                        <ReactQuill
                            className="quill-editor"
                            modules={modules}
                            theme={'snow'}
                            formats={this.formats}
                            value={this.state.body}
                            onChange={this.updateQuill}
                        />


                    </form>

                </div>

            </div>
        );
    }
}


const mSTP = (state, ownProps) => {

    const noteId = ownProps.match.params.noteId
    const currentUser = state.entities.users[state.session.id]
    const note = state.entities.notes[noteId]
    const notebooks = Object.values(state.entities.notebooks)

    return (
        {
            currentUser,
            noteId,
            note,
            notebooks
        }
    )

};

const mDTP = dispatch => {

    return (
        {
            fetchNote: (noteId) => dispatch(fetchNote(noteId)),
            fetchNotes: (noteId) => dispatch(fetchNotes(noteId)),
            fetchNotebooks: (id) => dispatch(fetchNotebooks(id)),
            updateNote: note => dispatch(updateNote(note)),
            deleteNote: id=> dispatch(deleteNote(id))
        }
    )

};

export default connect(mSTP, mDTP)(EditNote)
