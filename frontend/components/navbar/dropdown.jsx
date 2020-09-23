import React from 'react';
import {DropDownItems} from './nav_items';


class DropDown extends React.Component {


    render() {

        const menu = DropDownItems.map((item, i) => {
                 return (
                <li className='dropdown-listed'>
                    <a
                        key={i}
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
                <i class="fas fa-bars"></i>
                {menu}
            </div>
        )
    }
};

export default DropDown;