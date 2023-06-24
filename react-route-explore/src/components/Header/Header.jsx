import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/friends'>Friends</Link>
            <Link to="/posts">Posts</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;