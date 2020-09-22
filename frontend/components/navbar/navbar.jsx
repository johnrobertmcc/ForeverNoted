import React from 'react';
import { render } from 'react-dom';
import MenuItems from './nav_items';

class NavBar extends React.Component {

    render() {

        let navBar = () => {
            return (
                <div className="navbar">
                    <h1 className='logo-nav'>ForeverNoted</h1>
                    <div className="links-nav">

                        <ul>
                            {
                                MenuItems.map((item, i) => {
                                    return (
                                        <li>
                                            <a className={item.cName} href={item.url} key={i}>
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            )
        }

        return(
            {navBar}
        )

    }
    
}
export default NavBar;