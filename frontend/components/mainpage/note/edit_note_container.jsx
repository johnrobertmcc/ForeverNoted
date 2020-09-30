import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, updateNote } from '../../../actions/note_actions';
import ReactQuill from 'react-quill';
// import NotebookIndex from '../notebook/notebook_index_container';

class EditNote extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            user_id: this.props.currentUser.id,
            notebook_id: 1, //this.props.notebook.id,
            id: this.props.note.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateQuill = this.updateQuill.bind(this);
    }

    componentDidMount() {
        this.props.fetchNote(this.props.note.id)
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

    render() {

        const modules = {
            toolbar: [
                ["bold", "italic"],
                ["link", "blockquote", "code", "image"],
                [
                    {
                        list: "ordered"
                    },
                    {
                        list: "bullet"
                    }
                ]
            ]
        };

        const {note} = this.props;
        return( 
            
            <div className='editor-page'>

                <div className='editorpage-note-index'>


                    <div>
                        {note.title}
                    </div>

                    <div className='note-editor'>
                        {/* <NotebookIndex /> */}
                        {/* no notes in state.entities through this path */}
                    </div>
                        

                        <form
                            onSubmit={this.handleSubmit}>


                            <input
                                type="text"
                                className="note-title"
                                onChange={this.update('title')}
                                placeholder={this.state.title}
                                value={this.state.title}
                                />

                            {/* <input
                                    type="textarea"
                                    className="note-body"
                                    placeholder={this.state.body}
                                    onChange={this.update("body")}
                                    value={this.state.body}
                                /> */}

                            <ReactQuill
                                className="quill-editor"
                                modules={modules}
                                theme={'snow'}
                                value={this.state.body}
                                onChange={this.updateQuill}
                                placeholder={this.state.body}
                                >
                            </ReactQuill>

                            <button type="submit">Edit</button>

                        </form>
                    
                </div>
            </div>
        );
    }
}


const mSTP = (state, ownProps) => {

    debugger

    const note = state.entities.notes[ownProps.match.params.noteId]
    const currentUser = state.entities.users[state.session.id]

    return (
        {
            currentUser,
            note,
            // notebook
        }
    )

};

const mDTP = dispatch => {

    return (
        {
            fetchNote: (noteId) => dispatch(fetchNote(noteId)),
            updateNote: noteId => dispatch(updateNote(noteId))
        }
    )

};

export default connect(mSTP, mDTP)(EditNote)
