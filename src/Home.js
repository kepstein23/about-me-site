import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Button} from './components/Button';
import headshot from "./headshot.jpg"
import {AboutMe} from './components/AboutMe'
import { Coursework } from './components/Coursework';
import { Header } from './components/Header';
import { Experiences } from './components/Experiences';
import { Languages } from './components/Languages';
import { Navigation } from './components/Navigation';
import {BrowserRouter as Router, useNavigate} from 'react-router-dom'
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  const [toRender, setToRender] = useState("App");

  function handleRedirect(link) {
    window.open(link, '_blank')
  }

  function handleComponent(component) {
      setToRender(component);
  }

  if(toRender ==="Experiences") {
      return(
        <Experiences />
      )
  }

  if (toRender === "Coursework") {
      return(
        <Coursework />
        // <Route path="/coursework" element={<Coursework />} />
      )
  }

  if (toRender === "Languages") {
    return(
        <Languages />
    )
}

  const aboutMeText = [
    {
      name: "img",
      content: headshot,
      width: "250",
      height:"200"

    },
    {
      name: "text", 
      content: "Hi, my name is Kimberly Epstein.  I am a Junior at University of Pennsylvania pursuing a double major in Computer Science and Cognitive Science with minors in Consumer Psychology and Linguistics. I am passionate about the intersection of mind and computer science, and have special interests in Web Development, Artificial Intelligence and Natural Language Processing."
    }
    
  ]



  return (
    <Router>
      <div className="background" style={{padding: "0", backgroundColor: "487583"}} class="flex=container">
        <br/>
        <div >
          <div>
            <Header />
          </div>
        </div>
        <br />
        <div className="box" style={{display: "flex", justifyContent: "center"}}>
          <div style={{display: "flex", alignSelf: "center"}}> 
            <img style={{border: "2px solid #487583", borderRadius: "10px"}}src={headshot} height="368" width="450"></img>
          </div>
          <div >
            <div style={{alignSelf: "center"}}>
              <AboutMe />
              <div style={{padding:"5px", paddingTop: "30px", display:"flex", justifyContent:"center"}} >
              <div style={{padding:"5px"}}> 
                <Link to="/involvements" className='button'>Campus Involvement</Link>
                <Button handleClick={() => handleComponent("Languages")} children="Campus Involvement" />
              </div>
              <div style={{padding:"5px"}}> 
                <Link to="/coursework" className='button'>Coursework</Link>
                <Button handleClick={() => handleComponent("Coursework")} children="Relevant Coursework" />
              </div>
              <div style={{padding:"5px"}}>
                <Link to="/experiences" className='button'>Recent Work Experience</Link>
                <Button handleClick={() => handleComponent("Experiences")} children="Recent Work Experience"/>
              </div>
            </div>
          </div>
          </div>
        </div>
        <br/>
        <div className="box" style={{display: "flex", justifyContent: "center"}}> <Coursework /> </div>
        <br/>
        <div>
            <Languages />
        </div>
          <Routes>
            <Route path="/involvements" element={<Experiences />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/coursework" element={<Experiences />} />
            <Route path="/" element={<App />} />
          </Routes>
      </div>
    </Router>
  );
}
export default App;