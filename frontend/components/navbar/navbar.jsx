import React from 'react';
import {MenuItems} from './nav_items';

class NavBar extends React.Component {

    scrollHandle(){
      window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 383) {
            document.getElementsByClassName("navbar-links").style.display = "none";
            // ReactDOM.findDOMNode("navbar").style.display = "none";
        } else {
            document.getElementsByClassName("navbar").style.display = "initial";
        }
    }
}


    render() {


        return(
            <nav className="navbar"  onScroll={this.scrollHandle()}>
                <h1 className='logo-nav'>
                    <i className="fas fa-leaf" style={{ color: "mediumseagreen" }}></i>    ForeverNoted 
                </h1>
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
                </nav>

        )

     

    }
    
};
export default NavBar;