import React from 'react';
import './navbar.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='name'>
                    <button className='homeBut'>
                        <span className='mal'>malachi / </span>
                        <span className='dev'>DEV</span>
                    </button>
                </div>
                <div className='navOptions'>
                    <button className='navBut'>Skills</button>
                    <button className='navBut'>Experience</button>
                    <button className='navBut'>Projects</button>
                    <button className='btn-grad'>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar