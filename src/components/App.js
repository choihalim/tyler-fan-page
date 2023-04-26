import React, {useEffect, useState} from 'react';
import '../App.css';
import Header from "./Header"
import PageContainer from "./PageContainer"
import '../darkMode.css';



function App() {

  const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    
    useEffect(() => {
    // localStorage.setItem('theme', theme);
    document.body.className = theme;
    }, [theme]);

  return (
    <div className="App">
        
      <header className="App-header">
        <Header />
      </header>
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>{theme === 'light' ? "Dark Mode" : "Creative Mode"}</button>
      </div>
      <PageContainer />
    </div>
  );
}

export default App;
