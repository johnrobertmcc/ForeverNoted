import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component{
    

    render(){

        

        const {logOut} = this.props;


        return(

            <div className="homepage">
                
                <div className='sidebar'>
                    <p className='user-info'>
                        <i className="fa fa-pagelines" aria-hidden="true"></i>
                        <span className='username'> {this.props.currentUser.email}</span>
                    </p>
                    <button
                        onClick={logOut}
                        >TemporaryLogOut
                    </button>
                    
                    <ul className='links-home'>
                        <li className='newnote-btn'><Link to='/main/notes'><p className='plus'>+ <span className='btn-words'>Create a new note</span></p></Link></li>
                        <li className='switch-links'><Link to='/main/notes'>Notes</Link></li>
                        <li className='switch-links'><Link to='/main/notebooks'>Notebooks</Link></li>
                    </ul>
                </div>

            </div>
        )}
}



export default SideBar;