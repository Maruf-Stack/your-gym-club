import { faCode, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <h2><span className='icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Your Gym Club</h2>
            <p>Select your today's exercise</p>


        </div>
    );
};

export default Header;