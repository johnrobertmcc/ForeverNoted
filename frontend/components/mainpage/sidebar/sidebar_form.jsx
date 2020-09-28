import React from 'react';
import CreateNote from '../note/create_note_container';
import { Link } from 'react-router-dom';



class SideBar extends React.Component{


    render(){

        const {logOut} = this.props;


        return(

            <div className="sidebar">

                <p className='user-info'>
                    <i className="fa fa-pagelines" aria-hidden="true"></i>
                    {/* <span className='username'> {this.props.currentUser.email}</span> */}

                </p>
                <button
                    onClick={logOut}
                >LogOut</button>

                <ul>
                    <Link to='/notes'>Notes</Link>
                    <Link to='/notebooks'>Notebooks</Link>
                

                </ul>

            </div>
        )}
}


export default SideBar;