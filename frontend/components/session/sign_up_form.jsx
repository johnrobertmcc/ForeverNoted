import React from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends React.Component {

    constructor(props){
        super(props);

        // this.state = this.props
        this.state = { 
            password: '',
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
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

    demoLogin(e) {
        e.preventDefault();
        const demoUser = {
            email: 'demo_user@demo.co.it',
            password: 'password'
        };
        this.props.logIn(demoUser);
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
                        <h1 className='logo-form'><i className="fas fa-horse-head"></i></h1>
                        <h1>ForeverNoted</h1>
                        <p className='slogan'>Remember everything important.</p>
                        
                        <form onSubmit={this.handleSubmit}>
                            
                            {this.renderErrors()}

                            <button
                                type='button'
                                className='guest-button'
                                onClick={this.demoLogin}
                            > <i className="fa fa-user-circle-o" aria-hidden="true"></i>    Continue as Guest </button>


                            <p className='head'>─────────────── or ───────────────</p>

                                <input
                                    className='signup-input'
                                    type='text'
                                    placeholder='    Email'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    />
                            <br></br>

                                <input
                                    className='signup-input'
                                    type='password'
                                    value={this.state.password}
                                    placeholder='    Password'
                                    onChange={this.update('password')}
                                    />
                
                            <br></br>
                            
                            <button
                            // type='button'
                            className='signup-button'
                            // value='submit'
                            > Continue </button>
                        </form>

                        <p className='terms'>
                            By creating an account, you are agreeing to our
                        </p>
                    <p className='terms'> <Link to='#'><p className='green-word'>Terms of Service</p></Link> <p>and</p> <Link to='#'><p className='green-word'>Privacy Policy</p></Link> </p>
                        <br></br>
                        <p className='redirect'>Already have an account?</p>
                    <Link to='/login'><p className='redirect-button'>Sign in</p></Link>
                    </div>
                </div>

        )
    }
};

export default SignUpForm;