import React from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends React.Component {

    constructor(props){
        super(props);

        debugger
        this.state = { 
            password: '',
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillUnmount(){
        this.props.removeErrors();
    }


    renderErrors() {
        return (
            <ul className='errors-ul'>
                {   this.props.errors.map((error, i) => (
                    <li className='errors-li' key={i}> {error} </li>
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


        // debugger
        return (

                <div className="background-image">
                    <div className='signupform'>
                    <h1 className='logo-form'> <i className="fas fa-leaf"></i></h1>
                    <h1 className='form-app'>ForeverNoted</h1>
                        <p className='slogan'>Remember everything important.</p>
                        <br></br>
                        <form onSubmit={this.handleSubmit}>
                        

                            <button
                                type='button'
                                className='guest-button'
                                onClick={this.demoLogin}
                        > <i className="fa fa-user-circle-o" aria-hidden="true" style={{ color: "green" }}></i>    Continue as Guest </button>


                            <p className='head'>──────────── or ────────────</p>

                                {this.renderErrors()}
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
                            <br></br>
                            Come In
                        </p>
                    {/* <p className='terms'> <Link to='#'><p className='green-word'>Terms of Service</p></Link> <p>and</p> <Link to='#'><p className='green-word'>Privacy Policy</p></Link> </p> */}
                    {/* <p className='terms'> <a  href='#'>Terms of Service</a>and<a href='#'>Privacy Policy</a> </p> */}
                    <br></br>
                        <p className='redirect'>Already have an account?</p>
                    <Link to='/login'><p className='redirect-button'>Sign in</p></Link>
                    </div>
                </div>

        )
    }
};

export default SignUpForm;