import React from 'react';


class SignUpForm extends React.Component {

    constructor(props){
        super(props);

        // this.state = this.props
        this.state = { 
            password: '',
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);
    }

    renderErrors() {
        return (
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
            <div className="background-image">
                <div className='signupform'>
                    <h1><i className="fas fa-horse-head"></i></h1>
                    <h1>ForeverNoted</h1>
                    <p className='slogan'>Remember everything important</p>
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
                        className='signup-button'
                        value='submit'
                        />
                    </form>
                </div>
            </div>
        )
    }
};

export default SignUpForm;