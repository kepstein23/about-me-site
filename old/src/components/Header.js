import React, { useState } from "react";
import { AboutMe } from "./AboutMe";
import { Button } from "./Button";
import { Coursework } from "./Coursework";
import { Experiences } from "./Experiences";

export function Header () {

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

    return (
        <div>
            <div className="header">
                <h1 style={{marginTop: "5px"}}>Hi, my name is Kimberly Epstein.</h1>
                <div style={{padding:"5px", display:"flex", justifyContent:"center"}} > 
                    <div style={{padding:"5px"}}> 
                        <Button children="View my Resume" handleClick={() => handleRedirect("https://drive.google.com/file/d/1cOaLHX2OCSB5ua9_7MOLgwstVmWO9VvM/view?usp=sharing")}/>
                    </div>
                    <div style={{padding:"5px"}}>
                        <Button handleClick={() => handleRedirect("https://github.com/kepstein23")} children="View my GitHub"/>
                    </div>
                    <div style={{padding:"5px"}}>
                        <Button handleClick={() => handleRedirect("https://www.linkedin.com/in/kimberly-epstein/")} children="Connect on LinkedIn" />
                    </div>
                </div>
            </div>
        </div>
        
    )
    
}