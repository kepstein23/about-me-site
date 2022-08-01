import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button} from './components/Button';
import { TextBox } from './components/TextBox';

function App() {

  function handleRedirect(link) {
    window.open(link, '_blank')
  }


  return (
    <div class="flex=container">
      <header>
        Hi, I'm Kimberly Epstein. Welcome to my site!
      </header>
      <div style={{padding:"5px", display:"flex"}} >
        <div style={{padding:"5px"}}> 
          <Button children="View my Resume" />
        </div>
        <div style={{padding:"5px"}}>
        <Button handleClick={() => handleRedirect("https://github.com/kepstein23")} children="View my Github"/>
        </div>
        <div style={{padding:"5px"}}>
        <Button handleClick={() => handleRedirect("https://www.linkedin.com/in/kimberly-epstein/")} children="Connect on LinkedIn" />
        </div>
      </div>
      <div style={{padding:"5px"}}>
        <TextBox 
          title="About me"
          subtitle="learn about me"
          text="this is me"
        />
      </div>
      
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
