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
              <Button handleClick={() => handleComponent("Languages")} children="Campus Involvement" />
            </div>
            <div style={{padding:"5px"}}> 
              <Button handleClick={() => handleComponent("Coursework")} children="Relevant Coursework" />
            </div>
            <div style={{padding:"5px"}}>
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
      
    </div>
  );
}
export default App;
