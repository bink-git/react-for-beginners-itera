import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';

function App() {
  const about = data.map((item) => {
    return item;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{about[0].name}</h1>
        <p>{about[0].bio}</p>
        <a href={about[0].contacts.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <a href={about[0].contacts.instagram} rel="noreferrer" target="_blank">
          Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
