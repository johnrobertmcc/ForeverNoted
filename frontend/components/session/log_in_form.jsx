import React from 'react';


class LogInForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.logIn(user);
    }

    update(str) {
        return e => {
            this.setState(
                { [str]: e.target.value }
            )
        };
    }

    render() {
        return (
            <div className='login-form'>
                <h1>Log In</h1>
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