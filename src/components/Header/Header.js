import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
         <div>
           <div className='header'>
                <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
                <h1>Sakil Gymnasium</h1>
           </div>
            <p>Select today's exercise & find total time</p>
        </div>
    );
};

export default Header;