import React from 'react';
import CreateNotebook from './create_notebook_container';
import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { Link } from 'react-router-dom';
import { fetchNotebooks } from '../../../actions/notebook_actions';


class AllNotebookIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

        this.props.fetchNotebooks(this.props.currentUser.id);
    }


    notebookIndex() {
        let { notebooks } = this.props;


        //get an indiviual notebook's show page
        if (notebooks.length > 0) {
            return notebooks.map((notebook, i) => (
                <table 
                className='notebook-table'
                >
                        <tr className='row'>
                            <Link to={`/main/notebooks/${notebook.id}/notes`}>
                            <th className='row-content'><i className="fa fa-book" aria-hidden="true"></i>{notebook.title}</th>
                            </Link>
                        </tr> 
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