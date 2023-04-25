import React from 'react';
import '../App.css';
import Header from "./Header"
import PageContainer from "./PageContainer"



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <p>this is our tyler page</p>
        <PageContainer />
      </header>
    </div>
  );
}

export default App;
