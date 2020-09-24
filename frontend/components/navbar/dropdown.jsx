import React from 'react';
import {DropDownItems} from './nav_items';


class DropDown extends React.Component {


    render() {

        const menu = DropDownItems.map((item, i) => {
                 return (
                <li 
                className='dropdown-listed'
                key={i}
                >
                    <a
                        className={item.cName}
                        href={item.url}
                    >
                        {item.title}
                    </a>
                </li>

                )
        })

        return(
            <div className='dropdown'>
                <i className="fas fa-bars"></i>
                {menu}
            </div>
        )
    }
};

export default DropDown;