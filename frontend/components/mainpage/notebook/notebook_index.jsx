import React from 'react';

class NotebookIndex extends React.Component {
    constructor(props) {
        // debugger
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    }

    render() {
        // debugger
        return (
            <div>no notebooks yet</div>
        )
    }
}


export default NotebookIndex;