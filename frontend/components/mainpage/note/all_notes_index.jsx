import React from 'react';
import CreateNote from './create_note_container';
import EditNote from './edit_note_container';
import { connect } from 'react-redux';
import { deleteNote, fetchNotes } from '../../../actions/note_actions';     
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom';

class AllNotesIndex extends React.Component {
    
    constructor(props) {
        super(props);
        
        // let action;
        
        // if(typeof props.location.state !== 'undefined'){
        //     debugger
        //     action = props.location.state.action
        // }else{
        //     debugger
        //     action = props.action;
        // }

        this.state = {
            filtered: this.props.notes,
            searched: false,
            action: this.props.action,
            fromNotebook: this.props.fromNotebook
            
        }

        this.handleChange = this.handleChange.bind(this);
    }


    componentDidUpdate(prevProps, prevState) {
        
        debugger
        if(prevProps.notes.length !== this.props.notes.length){
            this.props.fetchNotes(this.props.currentUser.id); //change this logic
            this.setState({filtered: this.props.notes})
            this.forceUpdate()
        } 
    }

    componentDidMount() {
        this.props.fetchNotes(this.props.currentUser.id)
        this.setState({
            filtered: this.props.notes,
            action: {type: 'create', note: ''} 
        });
    }


    currentDate(note) {
        if(note.created_at === note.updated_at){
            return(
                <Moment fromNow>{note.created_at}</Moment>
            )
        }else{
            return(
                <Moment fromNow>{note.updated_at}</Moment>
            )
        }
    }

    createMarkup(idx){
        if(this.state.searched){
            return { __html: this.state.filtered[idx].body }
        }else{
            return { __html: this.props.notes[idx].body }
        }
    }

    sortByEdited(notes){
        if(notes.length > 1){
            return notes.sort(function(a, b){
                return a.updated_at > b.updated_at ? -1 : 1;
            })

        }else{
            return notes
        }
    }

    editor(action){

        switch (action.type) {

            case 'edit':
                return <EditNote note={action.note}/>;
            
            case 'create':
                return <CreateNote notebook={action.notebook}/>;
            
            default:
                return <CreateNote notebook={action.notebook}/>;
        }      
    }

    switchButton(note){
        this.setState({
            action: {
                type: 'edit',
                note: [note]
            }
        })
    }


    noteIndex() {
        let { notes, deleteNote } = this.props;
        
        let allNotes;
        
        
        allNotes = this.state.searched ? this.state.filtered : notes;
        
        debugger
        
        if (allNotes.length > 0) {
            
            let sortedNotes = this.sortByEdited(allNotes)
            return sortedNotes.map((note, i) => (
                <div 
                className='ind-note' 
                key={note.id}
                onClick={() => this.switchButton(note)}
                >
                    
    
                    <li className='note-link'>
                        {note.title}
                    </li>

                    <li className='note-body'>
                        <div dangerouslySetInnerHTML={this.createMarkup(i)} />
                    </li>
                    
                    <li className="date">
                        {this.currentDate(note)}
                    </li>
                
                    <li>
                        <button 
                            onClick={() => deleteNote(note.id)}
                            className='delete-btn'
                        >
                            <i className="fas fa-trash"></i>
                        </button>

                    </li>

                </div>
            ))
        } else {
            return "no notes yet!"
        }

    }

    handleChange(e) {
        let {notes} = this.props
 
        let currentList = [];

        if (e.target.value !== "") {
            for(let i = 0; i < notes.length; i++){
    
                if(notes[i].title.includes(e.target.value)){
                    currentList.push(notes[i])
                }else if(notes[i].body.includes(e.target.value) && !currentList.includes(notes[i])){
                    currentList.push(notes[i])
                }
            };

        } else {
            currentList = notes;
        };

        this.setState({
            filtered: currentList,
            searched: true
        });
    }

    indexTitle(){
        let {fromNotebook, notebook} = this.props;

        if(fromNotebook){
            return notebook.title
        }else{
            return "All Notes"
        }
    }


    render() {
        let { notes } = this.props;
        let allNotes;
        this.state.searched ? allNotes = this.state.filtered :  allNotes = notes;
        let noteCount = () => {
            if (allNotes.length === 1) {
                return (allNotes.length + " note")
            } else {
                return (allNotes.length + " notes")
            }
        }


        return (

            <div className='allnotes'>

                <div className='note-index-container'>
                    <div className='note-header'>

                        <h3>{this.indexTitle()}</h3>

                        <p className="note-count">{noteCount()}</p>
                        
                        <div className='searchbarcontainer'>
                            <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                        </div>

                        <hr className="note-index-line"></hr>

                        <ul className="note-index">{this.noteIndex()}</ul>

                    </div>
                </div>

                <div className='allnotes-create-form'>
                    {this.editor(this.state.action)}
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {

    let notes;
    let fromNotebook;
    let notebook;

    if(typeof ownProps.location.state !== 'undefined'){
        fromNotebook = true
    }else{
        fromNotebook = false
    }

    if(typeof ownProps.notes !== 'undefined'){
        notes = Object.values(ownProps.notes)
    }else{
        notes = Object.values(state.entities.notes)
    }

    if(fromNotebook){
        notebook = state.entities.notebooks[ownProps.match.params.notebookId]
    }else{
        notebook = false
    }
    
    return {
        notes,
        notebook,
        notebooks: Object.values(state.entities.notebooks),
        currentUser: state.entities.users[state.session.id],
        action: {
                type: 'create',
                note: '',
                notebook
            },
        fromNotebook
    }
};

const mapDispatchToProps = dispatch => {
    return { 
        fetchNotes: id => dispatch(fetchNotes(id)),
        deleteNote: (id) => dispatch(deleteNote(id)), 
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllNotesIndex)); 
