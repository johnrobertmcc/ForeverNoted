import React from 'react';
// import SignUpFormContainer from '../components/session/sign_up_form';
import NavBar from './navbar/navbar';
import DropDown from './navbar/dropdown';



class HomePage extends React.Component {


    render() {
    
        const { logOut } = this.props;
        return(
            <div>
               

                <div className='top-level'> <NavBar /></div>
                <div className='first-level'>
                <header>
                </header>
                         
                  <div className='right-home'>
                         <h1 className="home-slogan">Simplify your life</h1>
                        <div className="home-words">ForeverNoted is the home for everything you need to remember, and everything you want to achieve.</div>
                        <br></br> 
                        <br></br> 
                        <div className='flex-button'><a href='#/signup'><button className='signup-button-homepage'>Sign up for free</button></a></div>

                 </div>

                    <div className='home-image'></div>

                    {/* <h1 className="home-slogan">Simplify your life</h1>
                    <div className='image-words'>
                            <div className="home-words">ForeverNoted is the home for everything you need to remember, and everything you want to achieve.</div>
                            <div className='flex-button'><a href='#/signup'><button className='signup-button-homepage'>Sign up for free</button></a></div>
                            <div className='home-image'></div>
                    </div>
                     */}

                     

                    

                
                    
                </div>

                <div className='second-level'>
                    <h1 className='icon-second'><i className="fas fa-seedling" style={{ color: "mediumseagreen" }}></i></h1>
                    
                    <h1 className='slogan-second'> Focus on what matters most</h1>
                    <div className='boxes'>

                        <div className='inside-second'>
                            Manage everything from big projects to personal moments.

                        </div>

                        <div className='inside-second'>
                            Capture ideas and inspiration in notes, voice, and pictures.
                        </div>

                        <div className='inside-second'>
                            Never lose track of your tasks and deadlines.

                        </div>
                    </div>

                </div>

                <div className='third-level'>
                    <h1 className='icon-third'><i className="fas fa-lemon" style={{ color: "mediumseagreen" }}></i></h1>

                    <h1 className='slogan-third'> At work, at home, and everywhere in between</h1>

                    <div className='inside-third'>
                        <p className='first-p'>inspired by Evernote</p>
                        

                    </div>

                </div>

                <hr className='footer-line'></hr>
                <footer className='footer-home'>
                    <p className='name'>John Robert McCann</p>
                    <a href="https://github.com/johnrobertmcc?tab=repositories">GitHub</a>
                    <a href="https://www.linkedin.com/in/jrmcc/">LinkedIn</a>
                    {/* <a>J.R. McCann(in progress)</a> */}
                    
                </footer>
                <button
                onClick={logOut}
                >TemporaryLogOut</button>
            </div>
        )
    }
}

export default HomePage;
