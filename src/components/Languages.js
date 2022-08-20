import React, { useState, useEffect } from "react";
import { LanguageBar } from "./LanguageBar";
import "./Languages.css"
import { Experiences } from "./Experiences";
import { Coursework } from "./Coursework";
import { AllCourses } from "./AllCourses";
import App from "../App";
import { Button } from "./Button";

export function Languages() {
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
  
    if (toRender === "Project") {
      return(
          <Coursework />
      )
    }
  
    if (toRender === "App") {
      return(
          <App />
      )
    }

    // <div className="menu-bar" style={{display:"flex", justifyContent:"center"}} >
    //             {/* <div style={{padding:"5px"}}> 
    //                 <Button handleClick={() => handleComponent("Languages")} children="Campus Involvement" />
    //             </div> */}
    //             <div style={{padding:"5px"}}> 
    //                 <Button className="button-dark" handleClick={() => handleComponent("App")} children="Home" />
    //             </div>
    //             <div style={{padding:"5px"}}> 
    //                 <Button className="button-dark" handleClick={() => handleComponent("Project")} children="Project Highlights" />
    //             </div>
    //             <div style={{padding:"5px"}}> 
    //                 <Button className="button-dark" handleClick={() => handleComponent("Languages")} children="Language Proficiencies" />
    //             </div>
    //             <div style={{padding:"5px"}}> 
    //                 <Button className="button-dark" handleClick={() => handleComponent("Coursework")} children="Relevant Coursework" />
    //             </div>
    //             <div style={{padding:"5px"}}>
    //                 <Button className="button-dark" handleClick={() => handleComponent("Experiences")} children="Recent Work Experience"/>
    //             </div>
    //         </div>
    return (
        <div>
            <div className="box">
                <div className="solid-text" style={{width: "85%"}}>
                    <h1 className="heading" style={{width: "60%", marginTop: "20px", marginBottom: "20px"}}>
                        Coding Language Proficiency
                    </h1>
                </div>
                <br/>
                <div className="textBox" style={{padding: "5px"}}>
                    {/* <div style={{padding: "10px", display: "flex", marginTop: "15px"}}>
                        <h1 className="heading" style={{}}>Coding Language Proficiency</h1>
                    </div> */}
                    
                    <div style={{padding: "10px", margin: "15px"}}>
                        <h3 className="subtitle" style={{color:"white"}}>Java</h3>
                        <div class="container">
                        <div class="skills java">90%</div>
                        </div>

                        <h3 className="subtitle" style={{color:"white"}}>JavaScript</h3>
                        <div class="container">
                        <div class="skills javascript">85%</div>
                        </div>

                        <h3 className="subtitle" style={{color:"white"}}>Python</h3>
                        <div class="container">
                        <div class="skills python">70%</div>
                        </div>

                        <h3 className="subtitle" style={{color:"white"}}>R</h3>
                        <div class="container">
                        <div class="skills r">65%</div>
                        </div>

                        <h3 className="subtitle" style={{color:"white"}}>HTML</h3>
                        <div class="container">
                        <div class="skills html">70%</div>
                        </div>

                        <h3 className="subtitle" style={{color:"white"}}>CSS</h3>
                        <div class="container">
                        <div class="skills css">60%</div>
                        </div>

                        <h3 className="subtitle" style={{color:"white"}}>OCaml</h3>
                        <div class="container">
                        <div class="skills ocaml">50%</div>
                        </div>

                        <h3 className="subtitle" style={{color:"white"}}>PHP</h3>
                        <div class="container">
                        <div class="skills php">40%</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        
        
    )
    
}