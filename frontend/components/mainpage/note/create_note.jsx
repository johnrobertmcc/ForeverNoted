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
            notebook_id: 1, //this.props.note.notebook_id
    
        }


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
        this.notebookList = this.notebookList.bind(this)
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

    componentDidMount(){
        this.props.fetchNotebooks(this.props.currentUser.id);
    }


    notebookList(){
        let {notebooks} = this.props
        notebooks.map(notebook => {
            return (
                <li>
                    {notebook.title}
                </li>
            )})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNote(this.state);
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
                        }
                    ]
                ]
            };
            
            return (
                <div className="create-note-main">
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
                                placeholder='Untitled'
                                value={this.state.title}
                                />
                            
                            <label htmlFor="nb-btn">Notebook?</label>
                                <select id="nb-btn" name="nb-btn">
                                <option>{this.notebookList()}</option>
                            </select>
                            
                            <button className='create-btn'>Create Note</button>
                            
                           
                
                        <ReactQuill
                            className="quill-editor"
                            modules={modules}
                            theme={'snow'}
                            formats={this.formats}
                            value={this.state.body}
                            onChange={this.updateQuill}
                            placeholder="Start writing..."
                        />

                       
                    </form>

                </div>
       
            </div>
            
            );

    }
}

export default CreateNote;
