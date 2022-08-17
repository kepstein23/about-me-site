import React from "react";
import { LanguageBar } from "./LanguageBar";
import "./Languages.css"

export function Languages() {
    return (
        <div className="box">
            <div style={{display: "flex"}}>
                <h1 className="head" style={{}}>Coding Language Proficiency</h1>
            </div>
            
            <div >
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
        
        
        
    )
    
}