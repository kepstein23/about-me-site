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
                <div className="solid-text" style={{width: "70%"}}>
                    <h1 className="heading" style={{width: "60%", marginTop: "20px", marginBottom: "20px"}}>
                        Coding Language Proficiency
                    </h1>
                </div>
                <br/>
                <br/>
                <div className="textBox" style={{padding: "5px"}}>
                    {/* <div style={{padding: "10px", display: "flex", marginTop: "15px"}}>
                        <h1 className="heading" style={{}}>Coding Language Proficiency</h1>
                    </div> */}
                    
                    <div style={{padding: "10px", margin: "15px"}}>
                        {/* <h3 className="subtitle" style={{color:"white"}}>Java</h3> */}
                        <div class="container">
                        <div class="skills java" style={{display: "flex", justifyContent: "space-between"}}>
                            <div className="subtitle" style={{fontSize: "20px", paddingLeft: "7px", fontWeight: "bolder"}}>Java</div>
                            <div>90%</div>
                        </div>
                        </div>
                        <br/>

                        <div class="container">
                        <div class="skills javascript" style={{display: "flex", justifyContent: "space-between"}}>
                            <div className="subtitle" style={{fontSize: "20px", paddingLeft: "7px", fontWeight: "bolder"}}>JavaScript</div>
                            <div>85%</div>
                        </div>
                        </div>
                        <br/>

                        <div class="container">
                        <div class="skills python" style={{display: "flex", justifyContent: "space-between"}}>
                            <div className="subtitle" style={{fontSize: "20px", paddingLeft: "7px", fontWeight: "bolder"}}>Python</div>
                            <div>75%</div>
                        </div>
                        </div>
                        <br/>

                        <div class="container">
                        <div class="skills html" style={{display: "flex", justifyContent: "space-between"}}>
                            <div className="subtitle" style={{fontSize: "20px", paddingLeft: "7px", fontWeight: "bolder"}}>HTML</div>
                            <div>70%</div>
                        </div>
                        </div>
                        <br/>

                        <div class="container">
                        <div class="skills r" style={{display: "flex", justifyContent: "space-between"}}>
                            <div className="subtitle" style={{fontSize: "20px", paddingLeft: "7px", fontWeight: "bolder"}}>R</div>
                            <div>65%</div>
                        </div>
                        </div>
                        <br/>

                        <div class="container">
                        <div class="skills css" style={{display: "flex", justifyContent: "space-between"}}>
                            <div className="subtitle" style={{fontSize: "20px", paddingLeft: "7px", fontWeight: "bolder"}}>CSS</div>
                            <div>60%</div>
                        </div>
                        </div>
                        <br/>

                        <div class="container">
                        <div class="skills ocaml" style={{display: "flex", justifyContent: "space-between"}}>
                            <div className="subtitle" style={{fontSize: "20px", paddingLeft: "7px", fontWeight: "bolder"}}>OCaml</div>
                            <div>50%</div>
                        </div>
                        </div>
                        <br/>

                        <div class="container">
                        <div class="skills php" style={{display: "flex", justifyContent: "space-between"}}>
                            <div className="subtitle" style={{fontSize: "20px", paddingLeft: "7px", fontWeight: "bolder"}}>PHP</div>
                            <div>40%</div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        
        
    )
    
}