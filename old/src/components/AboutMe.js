import React from "react";
import headshot from "../headshot.jpg"

export function AboutMe() {
    return (
        <div style={{padding:"5px", alignSelf: "center"}}>
            <div className="solid-text">
              <h1 className="heading" style={{width: "60%", marginTop: "15px", padding: "5px"}}>About Me</h1>
              <div style={{padding: "5px", display:"flex"}}>
                <div className="text" style={{padding: "5px", display: "flex", alignSelf: "center", justifyContent: "center"}}>
                  <p style={{fontSize: "22px"}}>
                    I am a Junior at University of Pennsylvania pursuing a double major 
                    in Computer Science and Cognitive Science with minors in Consumer Psychology and Linguistics. I am passionate
                    about the intersection of the study of the mind and computer science, and I have special interests in Artificial
                    Intelligence and Natural Language Processing.
                  </p>
                </div>
              </div>
            </div>
        </div>
    )
}



