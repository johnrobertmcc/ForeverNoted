import React from 'react';
// import SignUpFormContainer from '../components/session/sign_up_form';
import NavBar from './navbar/navbar';
import DropDown from './navbar/dropdown';
import {logOut} from '../actions/session_actions';



class HomePage extends React.Component {

    render() {
        const {logOut} = this.props;
       
        return(
            <div>
                    <button
                        onClick={logOut}
                    >LogOut</button>
               

                <header>
                    <NavBar/>
                    <DropDown />
                </header>
                {/* <SignUpFormContainer /> */}
            </div>
        )
    }
}

export default HomePage;
