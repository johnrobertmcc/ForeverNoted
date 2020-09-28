import React from 'react';

class NotebookIndex extends React.Component {
    constructor(props) {
   
        super(props);
    }

    componentDidMount() {
  
        this.props.fetchNotebooks();
    }


    notebookIndex() {
        let { notebooks } = this.props;

        if (notebooks.length > 0) {
            return notebooks.map(notebook => (
                <li>{notebook.title}</li>
            ))
        } else {
            return "no notebooks yet!"
        }

    }

    render() {
        return (
            <div>
                <ul>{this.notebookIndex()}</ul>
            </div>
        )
    }

}


export default NotebookIndex;