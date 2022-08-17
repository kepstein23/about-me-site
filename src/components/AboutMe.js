import React from "react";
import headshot from "../headshot.jpg"

export function AboutMe() {
    return (
        <div style={{padding:"5px"}}>
            <div className="textBox">
              <h1 className="heading">About Me</h1>
              <div style={{padding: "5px", display:"flex"}}>
                <div className="text" style={{padding: "5px", display: "flex", alignSelf: "center"}}>
                  <p>
                    Hi, my name is Kimberly Epstein.  I am a Junior at University of Pennsylvania pursuing a double major 
                    in Computer Science and Cognitive Science with minors in Consumer Psychology and Linguistics. I am passionate
                    about the intersection of mind and computer science, and have special interests in Artificial Intelligence and 
                    Natural Language Processing.
                  </p>
                </div>
              </div>
            </div>
        </div>
    )
}



