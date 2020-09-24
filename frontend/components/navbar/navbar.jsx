import React from 'react';
import {MenuItems} from './nav_items';

class NavBar extends React.Component {


    // navBar = () => {
    //     return (
        

    render() {

        return(
                <div className="navbar">
                <h1 className='logo-nav'>
                    <i className="fas fa-leaf"></i>
                </h1>
                <h1> ForeverNoted </h1>
                    <div className="links-nav">

                        <ul className="listed-items">
                            {
                                MenuItems.map((item, i) => {
                                    return (

                                        <li key={i}>
                                            <a 
                                            className={item.cName} 
                                            href={item.url} 
                                            
                                            >
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
    
};
export default NavBar;