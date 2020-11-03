import React from 'react';
import CreateNotebook from './create_notebook_container';
import { connect } from 'react-redux';
import { fetchNotebooks } from '../../../actions/notebook_actions';
import {Link} from 'react-router-dom'


class AllNotebookIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: {
                open: false,
                id: ''
            }
        }
    }

    componentDidMount() {

        this.props.fetchNotebooks(this.props.currentUser.id);
    }

    componentDidUpdate(prevProps, prevState) {
        
        if(prevProps.notebooks.length !== this.props.notebooks.length){
            this.props.fetchNotebooks(this.props.currentUser.id);
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

    showNotes(id){

        if(this.state.showMenu.open && this.state.showMenu.id === id){
        let notebook = this.props.notebooks.find(notebook => notebook.id === id)

            return notebook.notes.map( note => {

            return(
                 <Link to={{pathname:`/main/notebooks/${notebook.id}/notes`,
                            state: {
                                action: {
                                    type: 'edit',
                                    note
                                }
                            }
                        }}
                >
                        <li className='notebook-idx-show'>
                        {note.title}
                        </li>
                </Link>  
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

          let noteBookMap= notebooks.map((notebook, i) => {
                return(

                    <tbody>

                <tr>
                    <td onClick={() =>this.setState({showMenu: {open: !this.state.showMenu.open, id: notebook.id}})}>
                        {this.showCaret(notebook.id)}
                        {notebook.title}
                    </td>
                    <td>{currentUser.email}</td>
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
                        <th>Created By</th>
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

    render() {

        return (
            <div className='table'>

                <div className='all-notebook-header'>
                    <h3>Notebooks</h3>
                    <div className='new-nb-btn'><CreateNotebook /></div>
                </div>
                <div className='create-note-index'>
                </div>
                <hr className='notebooks-index-line'></hr>
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
        fetchNotebook: (id) => dispatch(fetchNotebooks(id))    
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllNotebookIndex); 