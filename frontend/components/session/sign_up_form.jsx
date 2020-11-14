import React from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends React.Component {

    constructor(props){
        super(props);
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

    newNotebook(userId){
        const firstNotebook = {
            title: 'My First Notebook',
            user_id: userId
        }

        this.props.createNotebook(firstNotebook).then(res =>{
            let notebookId = res.notebook.id;
            let userId = res.notebook.user_id;
            return this.newNote(notebookId, userId)
        });
    }

    newNote(notebookId, userId){
        const welcome = {
            title: "Welcome to ForeverNoted!",
            body: "<p>Hey! Thanks for using <strong style=\"color: rgb(0, 138, 0);\">ForeverNoted</strong><strong>.</strong> This is a place for you to store all your notes to help you keep your life organized. It can be used for:</p><ul><li>Grocery Lists</li><li>Recipes</li><li>Study sessions</li><li>Memoirs</li><li>General thoughts</li><li>anything you'd put in Evernote</li></ul><p><br></p><p>Feel free to log in as the Demo User if you need more inspiration!</p><p><br></p><p><strong>Hopefully the interface is intuitive to you, but if not:</strong></p><ol><li>Create your notes by writing in this editor (don't forget to give it a title!)</li><li>Your notes will appear on the left once you've hit that big green \"Create Note\" button. <strong><u>~Please don't forget to save~</u></strong></li><li>You can create a new notebook if you'd like by clicking on the 'Notebook' link in the sidebar over there &lt;--</li><li>Once a new notebook has been created, click in the footer below to assign any notes you create to any notebook</li><li><em> Not sure what notebook to put your note in? Tag it!</em></li><li>Similar to creating a notebook, click the 'Tags' link over there, and then click the \"+\" button on the new sidebar the pops up to make a new tag.</li><li>Then just assign your tag in the footer below!</li><li><em> Lost your note? Search for it!</em></li><li>You can search through your notes, for your specific tags, or for your notebooks. Give it a try</li></ol><p><br></p><p>If you have any criticisms (preferably constructive), concerns, questions, etc. feel free to reach out to me at:</p><p><br></p><p><span style=\"color: rgb(0, 41, 102);\">john.robert.mcc@gmail.com</span></p><p><br></p><p>And feel free to check out my other projects and work!</p><ul><li><a href=\"https://github.com/johnrobertmcc\" rel=\"noopener noreferrer\" target=\"_blank\">https://github.com/johnrobertmcc</a></li><li><a href=\"https://www.linkedin.com/in/jrmcc/\" rel=\"noopener noreferrer\" target=\"_blank\">https://www.linkedin.com/in/jrmcc/</a></li><li><a href=\"https://angel.co/u/john-robert-mccann\" rel=\"noopener noreferrer\" target=\"_blank\">https://angel.co/u/john-robert-mccann</a></li></ul><p><br></p><p>I've also put these links on the sidebar in case you lose them ;)</p><p><br></p><p>Stay Organized!</p><p><br></p><p><strong>-J.R.</strong></p>",
            user_id: userId,
            notebook_id: notebookId
        }
        this.props.createNote(welcome);

    }

    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signUp(user).then(res => {
            let userId = res.currentUser.id;
            return this.newNotebook(userId)
        })
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