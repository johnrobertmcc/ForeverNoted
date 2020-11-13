import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, updateNote, fetchNotes, deleteNote } from '../../../actions/note_actions';
import {fetchNotebooks} from '../../../actions/notebook_actions';
import ReactQuill from 'react-quill';

class EditNote extends React.Component {


    constructor(props) {
        super(props);

        let {note} = props
        this.state = {
            title: note.title,
            body: note.body,
            user_id: this.props.currentUser.id,
            redirect: false,
            tag_id: '',
            assignNotebook: false,
            notebook_id: note.notebook_id,
            saved: true
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
        // this.deleteBtn = this.deleteBtn.bind(this);
    }


    componentDidMount(){
        this.setState(this.props.note);
        this.state = this.props.fetchNote(this.props.note.id);
       
    }

    componentDidUpdate(prevProps){
        // /is url matches note
        if(this.props.note.id !== prevProps.note.id ){
            this.props.fetchNote(this.props.note.id);
            this.setState(this.props.note);
            this.setState({saved: false})
        };

        // if(this.props.note.tag_id !== prevProps.note.tag_id){
        //     this.props.fetchNote(this.props.note.id);
        //     this.setState({saved: true})
        // }
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
            { [str]: e.target.value,
                saved: false 
            }
            );
        };

    }

    updateQuill(html){

        return this.setState(
            {
                body: html,
                saved: false
            }
        ) 
    
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.updateNote(this.state).then(this.props.fetchNotebooks(this.state.user_id))
    }

    
    changeNotebook(){
        this.setState({assignNotebook: !this.state.assignNotebook})
    }

    
    notebookIndex(){
        let {notebooks} = this.props
        
        return notebooks.map(notebook=> {
            return(
                <li 
                onClick={() => this.setState({notebook_id: notebook.id, assignNotebook: false, saved: false})}
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
                onClick={() => this.setState({tag_id: tag.id, assignTag: false, saved: false})}
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


    footer(){
        let {tags, notebooks, note} = this.props;
        let title = notebooks.find(notebook=> {
            return notebook.id === this.state.notebook_id}
            ).title

        let tag;

        if(this.props.note.tag_id){
            tag = tags.find(tag => tag.id == this.props.note.tag_id).name

        }else{
            tag='No tag assigned yet!'
        }

        return(
            <div className='note-footer'>
               <div className='footer-nb-title'>
                   <i className="fas fa-book"></i> {title}
                </div>
              
                <div className='tag-container'><i className="fas fa-tags"></i> {tag} </div>
              
                {this.state.saved ? 
                    <div className='saved'><i className="fas fa-save"></i>All Changes Saved </div> :
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



        return( 
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
                                <button className='note-btn note-edits' onClick={() => this.changeNotebook()}>Change Notebook</button>
                                <button className='note-btn note-edits' onClick={() => this.toggleTag()}>Change Tag</button>
                                {/* <button className='note-btn' onClick=(() => this.props.deleteNote())>Delete Note</button> */}
                        
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
                                value={this.state.title}
                                />

                            <button className='note-btn create-btn' onClick={() => this.setState({saved:true})}>Save Changes</button>
        
                        </div>
                            <ReactQuill
                                className="quill-editor"
                                modules={modules}
                                theme={'snow'}
                                formats={this.formats}
                                value={this.state.body || ''}
                                onChange={this.updateQuill}
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


const mSTP = (state, ownProps) => {

    const note = ownProps.note;
    const currentUser = state.entities.users[state.session.id]
    const notebooks = Object.values(state.entities.notebooks)

    return (
        {
            currentUser,
            note,
            notebooks,
            tags: Object.values(state.entities.tags)
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
