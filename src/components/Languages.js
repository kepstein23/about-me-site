import React from "react";
import { LanguageBar } from "./LanguageBar";
import "./Languages.css"

export function Languages() {
    return (
        <div className="box">
            <div style={{display: "flex"}}>
                <h2 className="subhead" style={{marginLeft: 0, marginBottom: 0}}>Proficient</h2>
                <h1 className="head" style={{marginBottom: 50}}>Coding Language Proficiency</h1>
                <h2 className="subhead" style={{marginRight: 0, marginBottom: 0}}>Advanced</h2>
            </div>
            
            <div style={{display: "flex", alignSelf: "center"}}>
                <div>
                    <LanguageBar language="PHP" background={"#d2eaf1a1"}/>
                </div>
                <div>
                    <LanguageBar language="CSS" background={"#d2eaf1a5"}/>
                </div>
                <div>
                    <LanguageBar language="OCaml" background={"#d2eaf1b1"}/>
                </div>
                <div>
                    <LanguageBar language="HTML"background={"#d2eaf1b7"}/>
                </div>
                <div>
                    <LanguageBar language="R" background={"#d2eaf1c5"}/>
                </div>
                <div>
                    <LanguageBar language="Python" background={"#d2eaf1d5"}/>
                </div>
                <div>
                    <LanguageBar language="Javascript" background={'#d2eaf1e5'}/>
                </div>
                <div>
                    <LanguageBar language="Java" background={"#d2eaf1"}/>
                </div>
            </div>
        </div>
        
        
        
    )
    
}