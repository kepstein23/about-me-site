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
                <h1 style={{marginTop: 0}}>Hi, My Name is Kimberly Epstein.</h1>
                <div style={{padding:"5px", display:"flex", justifyContent:"center"}} > 
                    <div style={{padding:"5px"}}> 
                        <Button children="Download my Resume" />
                    </div>
                    <div style={{padding:"5px"}}>
                        <Button handleClick={() => handleRedirect("https://github.com/kepstein23")} children="View my Github"/>
                    </div>
                    <div style={{padding:"5px"}}>
                        <Button handleClick={() => handleRedirect("https://www.linkedin.com/in/kimberly-epstein/")} children="Connect on LinkedIn" />
                    </div>
                </div>
            </div>
        </div>
        
    )
    
}