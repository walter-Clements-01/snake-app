import React from 'react';
import logo from './logo.svg';
import Avatar from './components/avatar'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

const gender: string = 'F';

const backgroundColor: string = (gender == 'M') ? 'blue' : 'purple'

const appStyle: React.CSSProperties = { backgroundColor: backgroundColor, direction: 'initial', width: '100' }



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h2 style={appStyle}>
          ciao
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/*Learn React*/}
        </a>
        {Avatar({gender: gender})}
        <h2>
          {backgroundColor}
        </h2>
      </header>
    </div>
  );
}

export default App;
