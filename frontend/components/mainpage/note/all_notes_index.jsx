import React from 'react';
import CreateNote from './create_note_container';
import EditNote from './edit_note_container';
import { connect } from 'react-redux';
import { deleteNote, fetchNotes } from '../../../actions/note_actions';     
import { fetchNotebooks } from '../../../actions/notebook_actions';     
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom';

class AllNotesIndex extends React.Component {
    
    constructor(props) {
        super(props);
        

        this.state = {
            filtered: this.props.notes, //default
            searched: false,
            action: this.props.action,
            fromNotebook: this.props.fromNotebook,
            newNote: this.props.newNote,
            tutto: this.props.tutto
        }

        this.handleChange = this.handleChange.bind(this);
    }


    componentDidUpdate(prevProps, prevState) {

        if(prevProps.tutto.length !== this.props.tutto.length){
            this.props.fetchNotes(this.props.currentUser.id);
            this.props.fetchNotebooks(this.props.currentUser.id);
            this.setState({filtered: this.props.notes, action: this.props.action})
        }
        if(prevProps.notes.length !== this.props.notes.length){
            this.props.fetchNotes(this.props.currentUser.id);
            this.props.fetchNotebooks(this.props.currentUser.id);
            this.setState({filtered: this.props.notes, action: this.props.action})
        } 
        else if(prevState.filtered !== this.state.filtered && !this.state.searched){
        
            this.props.fetchNotes(this.props.currentUser.id);
            this.props.fetchNotebooks(this.props.currentUser.id);
            this.setState({filtered: this.props.notes, action: this.props.action})
        } 
        // if(this.props.allNotes.length !== prevProps.notes.length){
        //     this.props.fetchNotes(this.props.currentUser.id);
        //     this.setState({filtered: this.props.notes, action: this.props.action})

        // }
    }

    componentDidMount() {
        this.props.fetchNotes(this.props.currentUser.id)
        this.setState({
            filtered: this.props.notes,
            action: this.props.action
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

    editor(arg){

        let action = this.state.newNote ? {type: 'create', note: '', notebook: this.state.action.notebook} : arg  

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
                note: note
            },
            newNote: false
        })
    }


    noteIndex() {
                // console.log('note index')

        let { notes } = this.props;
        
        let allNotes;


        allNotes = this.state.searched ? this.state.filtered : notes;


        // if(this.state.filtered.length > this.props.notes.length){
        //     allNotes = this.state.filtered;
        // }
        
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

             this.setState({
                searched: true
            });

        } else {
            currentList = notes;
             this.setState({
                searched: false
            });
        };

        this.setState({
            filtered: currentList,
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
                // console.log('render')

        let { notes } = this.props;
        let allNotes;

        allNotes = this.state.searched ? this.state.filtered : notes;
        
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
                    {/* <div className='new-header'>Header goes here</div> */}
                    {this.editor(this.state.action)}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {

    let notes;
    let fromNotebook;
    let notebook;
    let action;
    let newNote;

    
    if(typeof ownProps.location.state !== 'undefined'){
        fromNotebook = true
        newNote = true
    }else{
        fromNotebook = false;
        newNote = false
    }
    
    if(fromNotebook){
        notebook = state.entities.notebooks[ownProps.match.params.notebookId]
        notes = Object.values(state.entities.notebooks[ownProps.match.params.notebookId].notes)
    }else{
        notebook = false
        notes = Object.values(state.entities.notes)
    }
    
    
    if(ownProps.action && !newNote){
        action = ownProps.action
    }else{
        
        action = {type: 'create', note: '', notebook} 
    }
    
    // console.log('ownProps.location.state:')
    // console.log(ownProps.location.state)
    // console.log('newNote:')
    // console.log(newNote)
    return {
        notes,
        notebook,
        notebooks: Object.values(state.entities.notebooks),
        currentUser: state.entities.users[state.session.id],
        action,
        fromNotebook,
        newNote,
        notebookId : notebook.id,
        tutto: Object.values(state.entities.notes)
    }
};

const mapDispatchToProps = dispatch => {
    return { 
        fetchNotes: id => dispatch(fetchNotes(id)),
        fetchNotebooks: id => dispatch(fetchNotebooks(id)),
        deleteNote: (id) => dispatch(deleteNote(id)), 
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllNotesIndex)); 
