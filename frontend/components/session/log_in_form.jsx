import React from 'react';
import { Link } from 'react-router-dom';


class LogInForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    renderErrors() {
        return(
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
        this.props.logIn(user);
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
                { [str]: e.target.value }
            )
        };
    }

    render() {
        return (

            <div className="background-image">
                <div className='signupform'>
                    <h1 className='logo-form'> <i className="fas fa-leaf"></i></h1>
                    <h1>ForeverNoted</h1>
                    <p className='slogan'>Remember everything important.</p>
                    <br></br>
                    <form onSubmit={this.handleSubmit}>

                        <button
                            type='button'
                            className='guest-button'
                            onClick={(e)=>this.demoLogin(e)}
                        > <i className="fa fa-user-circle-o" aria-hidden="true" style={{color: "green"}}></i> Continue as Guest </button>


                        <p className='head'>─────────────── or ───────────────</p>

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
                            type='button'
                            className='signup-button'
                            value='submit'
                            onClick={this.handleSubmit}
                        > Continue </button>

                    </form>
                        <br></br>
                        <br></br>
                        <div className="remember">
                        <input type="checkbox" value="remember" />
                            Remember me for 30 days
                        </div>

                    <br></br>
                    <p className='redirect'>Don't have an account?</p>
                    <Link to='/signup'><p className='redirect-button'>Create Account</p></Link>
                </div>
            </div>

        )
    }
};

export default LogInForm;