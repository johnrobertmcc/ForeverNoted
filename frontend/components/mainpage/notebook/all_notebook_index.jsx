import React from 'react';
import CreateNotebook from './create_notebook_container';
import { connect } from 'react-redux';
import { fetchNotebooks } from '../../../actions/notebook_actions';
import {Link} from 'react-router-dom'


class AllNotebookIndex extends React.Component {
    constructor(props) {
        super(props);

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
                    let temp = new Date((notebooks[i].notes[0].updated_at))
                    debugger
                    return temp.toDateString()
                }else{ return 'No Notes Yet'}
        }
        }


    }

    notebookIndex() {
        let { notebooks, currentUser } = this.props;


        //get an indiviual notebook's show page
        if (notebooks.length > 0) {
            return notebooks.map((notebook, i) => (
                <table
                className='notebook-table'
                key={i}
                >
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Created By</th>
                        <th>Last Updated At</th>
                    </tr>
                    </thead>
                    <tbody className='row'>
                    <tr>
                        <td>
                            <i className="fa fa-book" aria-hidden="true"></i>
                            <Link to={`/main/notebooks/${notebook.id}/notes`}>{notebook.title}</Link> 
                            ({notebook.notes.length})
                        </td>
                        <td>{currentUser.email}</td>
                        <td>{this.lastUpdated(notebook.id)}</td>
                    </tr>
                    </tbody>
                </table>
            ))
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
                <ul className='all-notebooks'>{this.notebookIndex()}</ul>

            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {

    return {
        notebooks: Object.values(state.entities.notebooks),
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => {

    return { 
        fetchNotebooks: (id) => dispatch(fetchNotebooks(id)),
        fetchNotebook: (id) => dispatch(fetchNotebooks(id))    
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllNotebookIndex); 