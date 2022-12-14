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
import { Menu } from './components/Menu';

export function Home() {
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
    <div className="background" style={{padding: "0", backgroundColor: "487583", margin: 0}} class="flex=container">
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
export default Home;