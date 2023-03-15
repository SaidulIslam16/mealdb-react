import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerlogo'>
                <a href='/home'><h2>theMealDb</h2></a>
            </div>
            <div className='menu'>
                <a href="/allmeals">All Meals</a>
                <a href="/fish">Fish</a>
                <a href="/fish">Chicken</a>
            </div>
        </div>
    );
};

export default Header;