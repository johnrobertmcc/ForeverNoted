import React from 'react';

class CreateNote extends React.Component {

    constructor(props) {
        super(props)
        // debugger
        this.state = { title: ''}
        

        this.handleSubmit = this.handleSubmit.bind(this); // why bind? to be able to use as a callback with the correct context!
    }

    update(str) {

        return (e) => {
            this.setState(
                { [str]: e.target.value }
            );
        };
    
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.createNote(this.state);
        this.setState( { title: ''} )
    }

    render() {
        // debugger
        return (
            <div>
                <h2>New Note</h2>

                <form className="note-form" onSubmit={this.handleSubmit}>
                    
                    <input 
                    type="text"
                    id="note-title"
                    onChange={this.update('title')}
                    value={this.state.title}
                    />

                    {/* <input
                        type="text"
                        id="note-body"
                        onChange={this.update("body")}
                        value={this.state.body}
                    /> */}

                    <button>please work</button>
                </form>
            </div>
        );
    }
}

export default CreateNote;