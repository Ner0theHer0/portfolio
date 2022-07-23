import React from 'react';
import './navbar.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='name'>
                    <button className='homeBut'>
                        <span>Malachi</span>
                        <span className='dev'>Dev</span>
                    </button>
                </div>
                <div className='navOptions'>
                    <button>Skills</button>
                    <button>Experience</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar