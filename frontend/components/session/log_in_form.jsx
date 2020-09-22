import React from 'react';


class LogInForm extends React.Component {

    constructor(props) {
        super(props)
        debugger

        this.state = this.props

        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)

        this.state.signUp(user)
    }

    update(str) {
        return e => {
            this.setState(
                { [str]: e.target.value }
            )
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter a Username
                        <input
                            type='text'
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>

                    <label>Enter a Password
                        <input
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>

                    <button
                        value='submit'
                    />
                </form>
            </div>
        )
    }
};

export default LogInForm;