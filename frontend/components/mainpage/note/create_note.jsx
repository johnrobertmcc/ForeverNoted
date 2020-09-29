import React from 'react';
import ReactQuill from 'react-quill';
import NoteIndex from './notes_index_container';



class CreateNote extends React.Component {

    constructor(props) {
        super(props)



        this.state = { 
                title: '', 
                body: '', 
                user_id: this.props.currentUser.id,
                notebook_id: 1
            }

        // this.modules = {
        //     toolbar: [
        //         [{ 'font': [] }],
        //         [{ 'size': ['small', false, 'large', 'huge'] }],
        //         ['bold', 'italic', 'underline'],
        //         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        //         [{ 'align': [] }],
        //         [{ 'color': [] }, { 'background': [] }],
        //         ['clean']
        //     ]
        // };

        // this.formats = [
        //     'font',
        //     'size',
        //     'bold', 'italic', 'underline',
        //     'list', 'bullet',
        //     'align',
        //     'color', 'background'
        // ];
        

        this.handleSubmit = this.handleSubmit.bind(this);
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

        this.props.createNote(this.state);
        this.setState( { title: '', body: ''} )
    }

    render() {
        return (
            <div className="create-note-main">

                <div className='inner-sidebar'>
                    <NoteIndex />

                </div>

                <div className='note-editor'>
                    <form 
                        className="note-form" 
                        onSubmit={this.handleSubmit}>

                        <input 
                            type="text"
                            id="note-title"
                            onChange={this.update('title')}
                            placeholder='title'
                            value={this.state.title}
                        />

                        <input
                            type="text"
                            id="note-body"
                            placeholder='body'
                            onChange={this.update("body")}
                            value={this.state.body}
                        />

                        <button>please work</button>

                    </form> 

                </div>

            </div>
            
        );
    }
}

export default CreateNote;
