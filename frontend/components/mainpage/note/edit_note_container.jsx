import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, updateNote } from '../../../actions/note_actions';
import ReactQuill from 'react-quill';

class EditNote extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            user_id: this.props.currentUser.id,
            notebook_id: 1,
            id: this.props.note.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();

        this.props.updateNote(this.state);
        // this.setState(
        //     { 
        //         title: this.props.note.title, 
        //         body: this.props.note.body 
        //     }
        // )
    }

    render() {

        const {note} = this.props;
        return( 
            
            <div>

                <div>
                {note.title}
                </div>

                <div className='note-editor'>
                    <ReactQuill 
                        
                        value=''
                        onChange={this.handleSubmit}
                        modules={modules}>
                    </ReactQuill>
{/* 
                        <input
                            type="text"
                            id="note-title"
                            onChange={this.update('title')}
                            // placeholder={this.state.title}
                            value={this.state.title}
                        />

                        <input
                            type="textarea"
                            id="note-body"
                            // placeholder={this.state.body}
                            onChange={this.update("body")}
                            value={this.state.body}
                        /> */}

                        {/* <button type="submit">Edit</button> */}


                    <div>
                    
                    </div>
                </div>

            </div>
        );
    }
}


const mSTP = (state, ownProps) => {


    const note = state.entities.notes[ownProps.match.params.noteId]

    return (
        {
            formType: "Update Note",
            currentUser: state.entities.users[state.session.id],
            note
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