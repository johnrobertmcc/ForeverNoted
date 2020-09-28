import React from 'react';

class CreateNotebook extends React.Component {

    constructor(props) {
        super(props)

        this.state = { 
            title: '',
            user_id: this.props.currentUser.id,
            }


        this.handleSubmit = this.handleSubmit.bind(this);
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

        this.props.createNotebook(this.state);
        this.setState({ title: ''})
    }

    render() {
    
        return (
            <div>
                <h2>New Notebook</h2>

                <form className="notebook-form" onSubmit={this.handleSubmit}>

                    <input
                        type="text"
                        id="notebook-title"
                        onChange={this.update('title')}
                        placeholder='title'
                        value={this.state.title}
                    />

                    <button>please work notebook edition</button>
                </form>
            </div>
        );
    }
}

export default CreateNotebook;