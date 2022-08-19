import React, { useEffect, useState, useRef } from "react";
import { Button } from "./Button";
import { Coursework } from './Coursework';
import { AllCourses } from './AllCourses';
import { Experiences } from './Experiences';
import { Languages } from './Languages';
import { Home } from "../Home";
import App from "../App";

export function Menu() {
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
          <div>
            <Coursework />
          </div>
          
      )
    }

    if (toRender === "Home") {
        return(
            <div>
                <Home />
            </div>
        )
      }

    return(
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
    )
}