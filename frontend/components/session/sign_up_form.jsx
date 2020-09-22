import React from 'react';


class SignUpForm extends React.Component {

    constructor(props){
        super(props);

        // this.state = this.props
        this.state = { 
            username: '',
            password: '',
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);
    }

    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signUp(user);
    }

    update(str) {
        return e => { 
           this.setState( 
               { [str] : e.target.value}
           )
        };
    }

    render() {
        return (
            <div className='signupform'>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>

                    <label>Enter an email
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>

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

export default SignUpForm;