import React, {useState, useEffect} from 'react';
import NavBar from './NavBar'



function Header() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div>
            <div className='dark-mode-button'>
                <button  onClick={toggleTheme}>{theme === 'light' ? "Dark Mode" : "Creative Mode"}</button>
            </div>
                
            
            <div>
                <img className='banner-img' src="https://pbs.twimg.com/media/EVM9MCMUwAAcxla.jpg:large" alt='Tyler Banner' /> <br />
            </div>

            <NavBar />

        </div>
    );
}

export default Header;