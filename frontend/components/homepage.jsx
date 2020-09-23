import React from 'react';
import SignUpFormContainer from '../components/session/sign_up_form';
import NavBar from './navbar/navbar';
import DropDown from './navbar/dropdown';

class HomePage extends React.Component {

    render() {
        return(
            <div>

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
