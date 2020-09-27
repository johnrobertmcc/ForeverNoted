import React from'react';
import CreateNotebook from '../../components/mainpage/notebook/create_notebook_container';
import CreateNote from './note/create_note_container';



class Editor extends React.Component{

constructor(props) {

  
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
}

handleChange(value) {
    this.setState({ text: value })
}

noteOrNotebook() {

}

render() {
    return (

        <div>
    
            <CreateNotebook />
            <CreateNote />

            {/* value={this.state.text}
            onChange={this.handleChange} */}
        </div>
    )
}

}

export default Editor;