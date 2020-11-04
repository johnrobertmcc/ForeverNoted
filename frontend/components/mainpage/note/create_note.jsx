import React from 'react';
import ReactQuill from 'react-quill';
import {Redirect} from "react-router-dom"



class CreateNote extends React.Component {

    constructor(props) {

        super(props)
    
        const {notebook} = this.props

        debugger

        this.state = {
            title: '',
            body: '',
            user_id: this.props.currentUser.id,
            redirect: false,
            notebookId: notebook,
            isSubmitted: false
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
        this.setDefaultNotebookId = this.setDefaultNotebookId.bind(this);
        }
     
   
    update(str) {
        return (e) => {
            this.setState(
                { [str]: e.target.value }
            );
        };
    
    }


    setDefaultNotebookId(){
        debugger

        if(this.state.notebookId !== false){
            this.setState({
                notebook_id: this.state.notebookId
            })
        }else{
            this.setState({
                notebook_id: this.props.notebooks[0].id,
                redirect: true
            } )
    
        }
    }

    updateQuill(html) {

        return this.setState(
            { body: html }
        )

    }

    componentDidMount(){
        this.props.fetchNotebooks(this.props.currentUser.id);
    }

    componentDidUpdate(){
        if(this.state.isSubmitted){
            this.setState({
                title: '',
                body: '',
                user_id: this.props.currentUser.id,
                redirect: false,
                notebookId: this.props.notebook,
                isSubmitted: false

            })
        }

    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createNote(this.state);
        this.setState({isSubmitted: true})
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
                            
                            <button onClick={this.setDefaultNotebookId}  className='create-btn'>Create Note</button>
                           {/* {this.renderRedirect()} */}
                
                        <ReactQuill
                            className="quill-editor"
                            modules={modules}
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
