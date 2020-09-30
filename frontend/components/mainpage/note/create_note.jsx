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
            notebook_id: 1, //this.props.notebook.id,
        }


        this.formats = [
            'font',
            'size',
            'bold', 'italic', 'underline',
            'list', 'bullet',
            'align',
            'color', 'background'
        ];

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateQuill = this.updateQuill.bind(this);
        }
     
   
        update(str) {

        return (e) => {
            this.setState(
                { [str]: e.target.value }
            );
        };
    
    }


    updateQuill(html) {
        return this.setState(
            { body: html }
        )

    }


    handleSubmit(e) {
        e.preventDefault();

        this.props.createNote(this.state);
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

        // const notebook = this.props.fetchNotebook(this.props.notebookId)
    
        return (
            <div className="create-note-main">
                <div className='note-editor'>

                    {/* <p className='notebook-title-create'>{notebook.title}</p> */}
                    <form
                        className="note-form"
                        onSubmit={this.handleSubmit}>

                        <input
                            type="text"

                            id="note-title"
                            onChange={this.update('title')}
                            placeholder='Untitled'
                            value={this.state.title || 'Unititled'}
                        />

                        <button className='create-btn'>Create Note</button>


                        <ReactQuill
                            className="quill-editor"
                            modules={modules}
                            theme={'snow'}
                            formats={this.formats}
                            value={this.state.body}
                            onChange={this.updateQuill}
                            placeholder={this.state.body}
                       />

                       
                    </form>

                </div>
       
            </div>
            
        );
    }
}

export default CreateNote;


//add quill, add edit/create container
