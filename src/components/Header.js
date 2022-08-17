import React from "react";
import { Button } from "./Button";

export function Header () {
    function handleRedirect(link) {
        window.open(link, '_blank')
      }

    return (
        <div className="background">
            <h1 style={{marginTop: 0}}>Hi, My Name is Kimberly Epstein.</h1>
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
        </div>
    )
    
}