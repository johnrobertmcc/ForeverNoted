import ReactQuill from 'react-quill';
import React from'react';


class Editor extends React.Component{

constructor(props) {
    // debugger
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
}

handleChange(value) {
    this.setState({ text: value })
}

render() {
    return (
        <ReactQuill 
        value={this.state.text}
        onChange={this.handleChange} />
    )
}

}

export default Editor;