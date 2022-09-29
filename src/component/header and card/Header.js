import { faCode, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Cards from '../cards/Cards';
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <h2 className='main-header'><span className='icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Your Gym Club</h2>
            <p className='select'>Select your today's exercise</p>
        </div>
    );
};

export default Header;