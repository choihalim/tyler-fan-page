import React from 'react';
import NavBar from './NavBar'
import DarkMode from './DarkMode';



function Header() {
    
    return (
        <div>
            <DarkMode />
                
            <div>
                <img className='banner-img' src="https://pbs.twimg.com/media/EVM9MCMUwAAcxla.jpg:large" alt='Tyler Banner' /> <br />
            </div>

            <NavBar />

        </div>
    );
}

export default Header;