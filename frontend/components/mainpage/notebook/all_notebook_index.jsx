import React from 'react';
import CreateNotebook from './create_notebook_container';
import { connect } from 'react-redux';
import {AllNotesIndex} from '../note/all_notes_index';
import { fetchNotebooks } from '../../../actions/notebook_actions';


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


    notebookIndex() {
        let { notebooks, currentUser } = this.props;


        //get an indiviual notebook's show page
        if (notebooks.length > 0) {
            debugger
            return notebooks.map((notebook, i) => (
                // <table 
                // className='notebook-table'
                // key={i}
                // >
                //     <tbody>

                //         <td className='row'>
                           
                //             <th className='row-content'><i className="fa fa-book" aria-hidden="true"></i>{notebook.title}</th>
                            
                //         </td> 
                //     </tbody>
                // </table>

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
                    <tbody>
                    <tr>
                        <td>{notebook.title}</td>
                        <td>{currentUser.name}</td>
                        <td>timestamp here</td>
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
    debugger

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