import React from 'react';
import NavBar from './NavBar'



function Header() {

    return (
        <div>
            <img className='banner-img' src="https://pbs.twimg.com/media/EVM9MCMUwAAcxla.jpg:large" alt='Tyler Banner' /> <br />

            <NavBar />

        </div>
    );
}

export default Header;