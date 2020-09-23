import React from 'react';


class LogInForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderErrors() {
        return(
            <ul>
             {   this.props.errors.map((error, i) => (
                    <li key={i}> {error} </li>
                ))}
            </ul>
        )
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
                    {this.renderErrors()}

                    <label>Email
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>

                    <label>Password
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