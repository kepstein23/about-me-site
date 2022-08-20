import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {Button} from './components/Button';
import headshot from "./headshot.jpg"
import {AboutMe} from './components/AboutMe'
import { Coursework } from './components/Coursework';
import { AllCourses } from './components/AllCourses';
import { Header } from './components/Header';
import { Experiences } from './components/Experiences';
import { Languages } from './components/Languages';

function App() {
  const storage = window.localStorage;
  const [toRender, setToRender] = useState(storage.getItem("toRender"))
  useEffect(() => {
    storage.setItem('toRender', "App")
  }, [])
  useEffect(() => {
    storage.setItem('toRender', toRender);
  })

  // const [toRender, setToRender] = useState("App");

  function handleRedirect(link) {
    window.open(link, '_blank')
  }

  function handleComponent(component) {
    storage.setItem("toRender", component);
    setToRender(component);
    console.log(storage.getItem("toRender"));
      // setToRender(component);
  }

  if(toRender ==="Experiences") {
      return(
          <Experiences />
      )
  }

  if (toRender === "Coursework") {
      return(
          <AllCourses />
      )
  }

  if (toRender === "Languages") {
    return(
        <Languages />
    )
  }

  if (toRender === "Project") {
    return(
        <Coursework />
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
    <div>
      <div className="menu-bar" style={{display:"flex", justifyContent:"center"}} >
            {/* <div style={{padding:"5px"}}> 
              <Button handleClick={() => handleComponent("Languages")} children="Campus Involvement" />
            </div> */}
            <div style={{padding:"5px"}}> 
              <Button className="button-dark" handleClick={() => handleComponent("Home")} children="Home" />
            </div>
            <div style={{padding:"5px"}}> 
              <Button className="button-dark" handleClick={() => handleComponent("Project")} children="Project Highlights" />
            </div>
            <div style={{padding:"5px"}}> 
              <Button className="button-dark" handleClick={() => handleComponent("Languages")} children="Language Proficiencies" />
            </div>
            <div style={{padding:"5px"}}> 
              <Button className="button-dark" handleClick={() => handleComponent("Coursework")} children="Relevant Coursework" />
            </div>
            <div style={{padding:"5px"}}>
              <Button className="button-dark" handleClick={() => handleComponent("Experiences")} children="Recent Work Experience"/>
            </div>
        </div>
      <div className="background" style={{padding: "0", backgroundColor: "487583"}} class="flex=container">
        <br/>
        <div >
          <div>
            <Header />
          </div>
        </div>
        <br />
        <div className="box-light" style={{display: "flex", justifyContent: "center", backgroundColor: "#f1fcff"}}>
          <div style={{display: "flex", alignSelf: "center"}}> 
            <img style={{border: "2px solid #487583", borderRadius: "10px"}}src={headshot} height="368" width="450"></img>
          </div>
          <div >
            <div style={{alignSelf: "center"}}>
              <AboutMe />
              <div style={{padding:"5px", paddingTop: "30px", display:"flex", justifyContent:"center"}} >
              {/* <div style={{padding:"5px"}}> 
                <Button handleClick={() => handleComponent("Languages")} children="Campus Involvement" />
              </div> */}
              {/* <div style={{padding:"5px"}}> 
                <Button handleClick={() => handleComponent("Coursework")} children="Relevant Coursework" />
              </div>
              <div style={{padding:"5px"}}>
                <Button handleClick={() => handleComponent("Experiences")} children="Recent Work Experience"/>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <br/>
        {/* <div className="box" style={{display: "flex", justifyContent: "center"}}> <Coursework /> </div> */}
        <br/>
        
        <div>
            <Languages />
        </div>
        <br/>
        <div className='box-light' style={{display: "flex", width: "95%", justifyContent: "space-between"}}>
          <AllCourses />
          <Coursework />
        </div>
        
      </div>
    </div>
  );
}
export default App;
