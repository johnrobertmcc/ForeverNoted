import React from 'react';
import CreateNotebook from './create_notebook_container';
import { connect } from 'react-redux';
import { fetchNotebooks } from '../../../actions/notebook_actions';
import {fetchNotes} from '../../../actions/note_actions';
import {Link} from 'react-router-dom'


class AllNotebookIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: {
                open: false,
                id: ''
            },
            searched: false,
            filtered: this.props.notebooks,
            openModal: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        this.props.fetchNotebooks(this.props.currentUser.id);
        this.props.fetchNotes(this.props.currentUser.id);
    }

    componentDidUpdate(prevProps, prevState) {
        
        if(prevProps.notebooks.length !== this.props.notebooks.length){
            this.props.fetchNotebooks(this.props.currentUser.id);
            this.props.fetchNotes(this.props.currentUser.id);
            this.setState({filtered: this.props.notebooks})
        }
    }

    lastUpdated(notebookId){

        let {notebooks} = this.props

        for(let i = 0; i < notebooks.length; i++){
            if (notebooks[i].id === notebookId){
                if(notebooks[i].notes.length > 0){
                    let temp = new Date((notebooks[i].notes[notebooks[i].notes.length - 1].updated_at))
                    return temp.toDateString()
                }else{ return 'No Notes Yet'}
        }
        }


    }

    createdOn(notebookId){

        let {notebooks} = this.props

        for(let i = 0; i < notebooks.length; i++){
            if (notebooks[i].id === notebookId){
                    let temp = new Date((notebooks[i].created_at))
                    return temp.toDateString()
        }
        }

    }


    showNotes(id){
        
        if(this.state.showMenu.open && this.state.showMenu.id === id){
            let notebook = this.props.notebooks.find(notebook => notebook.id === id)
            
            return notebook.notes.map( note => {
    
                
            return(
    
                    <tr
                    key={note.id}
                    >
                        <Link to={{pathname:`/main/notebooks/${notebook.id}/notes`,
                                state: {
                                    action: {
                                        type: 'edit',
                                        note,
                                        notebook
                                    }
                                }
                            }}
                            >
                            <td className='notebook-idx-show'>
                            {note.title}
                            </td>

                    </Link>  
          
                    </tr>
            )
        })
        }
    }

    showCaret(id){
        if(this.state.showMenu.open && this.state.showMenu.id === id){
            return <i className="fas fa-caret-down"></i>
        }else{
            return <i className="fas fa-caret-right"></i>
        }
    }

    newNotebookIndex(){
          let { notebooks, currentUser } = this.props;

          let noteBookMap= this.state.filtered.map((notebook, i) => {
                return(
                <tbody className='full-nb-idx'
                key={notebook.id}
                >
                    <tr className='full-nb-idx'
                    key={i}
                    >
                        <td 
                        onClick={() =>this.setState({showMenu: {open: !this.state.showMenu.open, id: notebook.id}})}
                        className='notebook-link'
                        >
                            {this.showCaret(notebook.id)}
                            <Link to={{pathname: `/main/notebooks/${notebook.id}/notes`,
                                state: {
                                    fromNotebook: true,
                                    action: {
                                        type: 'create',
                                        note: ''
                                    }
                                }}}
                            >
                            {notebook.title} <span className='notebook-count'>({notebook.notes.length})</span>
                            </Link>
                        </td>

                        <td>{this.createdOn(notebook.id)}</td>
                        
                        <td>{this.lastUpdated(notebook.id)}</td>
                    
                    </tr>

                    <tr className='notebook-titles'>{this.showNotes(notebook.id)} </tr>
                </tbody>
                )

          })

        //get an indiviual notebook's show page
        if (notebooks.length > 0) {
            return(
            <table
            className='notebook-table'
            // key={i}
            >
                <thead>

                    <tr>
                        <th>Title</th>
                        <th>Created On</th>
                        <th>Last Updated At</th>
                    </tr>
                </thead>
                    {noteBookMap}
            </table>
            )
        } else {
            return "no notebooks yet!"
        }

    }

    toggleModal(){
        this.setState({openModal: !this.state.openModal})
    }


    newNotebook(){
        if(this.state.openModal){
            return (
            <div className='nb-modal'>
                <i 
                className="fa fa-window-close" 
                aria-hidden="true"
                onClick={() => this.setState({openModal: false})}
                ></i>
                <h1 className='nb-idx-title'>Create a Notebook</h1>
                 <hr className='tag-line'></hr>
                 <div className="input-new-nb"><CreateNotebook/></div>
            </div>
            )
        }else{
            return null
        }
    }


    handleChange(e) {

        let {notebooks} = this.props
 
        let currentList = [];

        if (e.target.value !== "") {
            for(let i = 0; i < notebooks.length; i++){
    
                if(notebooks[i].title.includes(e.target.value)){
                    currentList.push(notebooks[i])
                }
            };

             this.setState({
                searched: true
            });

        } else {
            currentList = notebooks;
             this.setState({
                searched: false
            });
        };

        this.setState({
            filtered: currentList,
        });

    }


    render() {

        return (
            <div className='table'>
                <div className='nbidx-header'>

                <div className='all-notebook-header'>
                    <h3 className='nb-idx'>Notebooks</h3>
                    <div className='nb-search'>
                        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                    </div>
                </div>
    
                    <div className='border-nbidx'>My notebook list</div>
                    <div className='testing2'><i className="fas fa-pencil-alt" onClick={()=>this.setState({openModal: true})}>New Notebook</i></div>
                    <div className={this.state.openModal ? 'open-nb-modal' : 'none-nb'}>
                            {this.newNotebook()}
                </div>
                <hr className='notebooks-index-line'></hr>
                </div>

                
                <ul className='all-notebooks'>{this.newNotebookIndex()}</ul>

            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {

    return {

        notebooks: Object.values(state.entities.notebooks),
        currentUser: state.entities.users[state.session.id],
   }
};

const mapDispatchToProps = dispatch => {

    return { 
        fetchNotebooks: (id) => dispatch(fetchNotebooks(id)),
        fetchNotebook: (id) => dispatch(fetchNotebooks(id)), 
        fetchNotes: (id) => dispatch(fetchNotes(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllNotebookIndex); 