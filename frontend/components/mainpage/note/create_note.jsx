import React from 'react';
import ReactQuill from 'react-quill';
import NotebookAssign from './notebook_assign_container';



class CreateNote extends React.Component {

    constructor(props) {

        super(props)
    
        const {notebook} = this.props

        this.state = {
            title: '',
            body: '',
            user_id: this.props.currentUser.id,
            redirect: false,
            notebookId: notebook,
            isSubmitted: false,
            tag_id: '',
            assignNotebook: false,
            saved: true,
            // notebook_id: this.props.notebooks[0].id
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
        // this.footer = this.footer.bind(this);
        }
     
   
    update(str) {
        return (e) => {
            this.setState(
                { 
                    [str]: e.target.value,
                    saved: false 
                }
            );
        };
    
    }


    setDefaultNotebookId(){
        if(this.state.notebookId !== false){
            this.setState({
                notebook_id: this.state.notebookId
            })
        }else{
            this.setState({
                notebook_id: this.props.notebooks[0].id,
                redirect: true,
                saved: true
            } )
    
        }
    }

    updateQuill(html) {

        return this.setState(
            { 
                body: html,
                saved: false
             }
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
                isSubmitted: false,
                tag_id: '',
                assignTag: false,
                saved: false

            })
        }

    }


    handleSubmit(e) {
        e.preventDefault();

        this.props.createNote(this.state).then(this.props.fetchNotes(this.props.currentUser.id));

        this.setState({isSubmitted: true});
    }
    
    changeNotebook(){
        this.setState({assignNotebook: !this.state.assignNotebook})
    }

    notebookIndex(){
        let {notebooks} = this.props
        
        return notebooks.map(notebook=> {
            return(
                <li 
                onClick={() => this.setState({notebookId: notebook.id, assignNotebook: false})}
                className='nbidx-list'
                key={notebook.id}
                >
                    {notebook.title}
                </li>
            )
        })
    }


    assignNB(){
        if(this.state.assignNotebook){
            return (
            <div className='nb-modal'>
                <i 
                className="fa fa-window-close" 
                aria-hidden="true"
                onClick={() => this.setState({assignNotebook: false})}
                ></i>
                <h1 className='nb-title'>Select a Notebook</h1>
                 <hr className='tag-line'></hr>
                {this.notebookIndex()}
            </div>
            )
        }else{
            return null
        }
    }
    toggleTag(){
        this.setState({assignTag: !this.state.assignTag})
    }

    tagIndex(){
        let {tags} = this.props
        
        return tags.map(tag=> {
            return(
                <li 
                onClick={() => this.setState({tag_id: tag.id, assignTag: false})}
                className='nbidx-list'
                key={tag.id}>
                    {tag.name}
                
                </li>
            )
        })
    }


    assignTag(){
        if(this.state.assignTag){
            return (
            <div className='nb-modal'>
                <i 
                className="fa fa-window-close" 
                aria-hidden="true"
                onClick={() => this.setState({assignTag: false})}
                ></i>
                <h1 className='nb-title'>Select a Tag</h1>
                 <hr className='tag-line'></hr>
                {this.tagIndex()}
            </div>
            )
        }else{
            return null
        }
    }



    notebookTitle(){

        let {notebooks} = this.props;
        if(this.state.notebookId){
            return(
            <div className='assigned-nb'><i className="fas fa-book"></i>  {notebooks.find(notebook => notebook.id == this.state.notebookId).title}</div> 
                )
        }else{
            return (
                <div className='unassigned'> No notebook assigned </div>
            )
        }

    }

    footer(){

        const {tags} = this.props

        let tag;

        if(this.state.tag_id !== ''){
            tag = tags.find(tag => tag.id == this.state.tag_id).name

        }else{
            tag='No tag assigned yet!'
        }

        return(
            <div className='note-footer'>
    
                {this.notebookTitle()}
                <div><i className="fas fa-tags"></i>{tag}</div>
                {this.state.saved ? 
                <div className='saved'><i className="fas fa-save"></i> All Changes Saved </div> :
                <div className='not-saved'> <i className="fas fa-exclamation"></i><i className="fas fa-exclamation"></i> Changes not yet saved </div>
                }

            </div>
        )
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

                <div>
                    <div className="create-note-main">
                        <div className='note-editor'>

                            <div className={this.state.assignNotebook ? 'open-nb-modal' : 'none'}>
                            {this.assignNB()}
                            </div>
                            <div className={this.state.assignTag ? 'open-tag-modal' : 'none'}>
                            {this.assignTag()}
                            </div>
                            
                            <div className='create-head'>
                                <button className='note-btn note-edits' onClick={() => this.changeNotebook()}>Assign Notebook</button>
                                <button className='note-btn note-edits' onClick={() => this.toggleTag()}>Assign Tag</button>

                                <form
                                    className="note-form"
                                    onSubmit={this.handleSubmit}>
                                </form>

                            </div>
                            <form
                                className="note-form"
                                onSubmit={this.handleSubmit}>   
                                <div className='header-buttons'>
                                    <input
                                        type="text"
                                        className='header-title'
                                        id="note-title"
                                        onChange={this.update('title')}
                                        placeholder='Untitled'
                                        value={this.state.title}
                                    />
                                    <button onClick={this.setDefaultNotebookId}  className='note-btn create-btn' >Create Note</button>

                                    </div>
            
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
                     <hr className='note-footer-line'></hr>
                        {this.footer()}
                    
                </div>
            

            );

    }
}

export default CreateNote;
