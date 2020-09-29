import React from 'react';
import CreateNotebook from './create_notebook_container';

class NotebookIndex extends React.Component {
    constructor(props) {

        
        super(props);

    }

    componentDidMount() {
  
        this.props.fetchNotebooks(this.props.currentUser.id);
    }


    notebookIndex() {
        let { notebooks } = this.props;

        if (notebooks.length > 0) {
            return notebooks.map((notebook, i) => (
                <li 
                className='notebook'
                key={i}
                >{notebook.title}</li>
            ))
        } else {
            return "no notebooks yet!"
        }

    }

    render() {

        return (
            <div className='notebook-full-index'>
                <div className='notebook-index-container'>
                        <h3 className='notebook-header'>Notebooks</h3>
                        <p> My notebook list</p>
                        <hr className='notebooks-index-line'></hr>
                        <ul className='notebook-list'>{this.notebookIndex()}</ul>
                </div>

                <div className='create-note-index'>
                    <CreateNotebook />
                </div>
            </div>
        )
    }

}


export default NotebookIndex;