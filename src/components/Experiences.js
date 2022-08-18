import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { TextBox } from "./TextBox";
import App from "../App";

export function Experiences() {
  const storage = window.localStorage;
  const [toRender, setToRender] = useState(window.localStorage.getItem("toRender"));

  useEffect(() => {
    console.log(window.localStorage.getItem("toRender"))
    window.localStorage.setItem('toRender', toRender);
  })

  function handleComponent(component) {
    storage.setItem("toRender", component);
    setToRender(component);
    console.log(storage.getItem("toRender"));
  }


    const experiencesTexts = [
        {
          name:"subtitle",
          content:"Computational Social Science Lab"
        },
        {
          name:"text",
          content:"As a research asisstant in Dr. Watts' Lab at the University of Pennsylvania, I worked to develop and implement a project focused on reducing affective polarization in group disucssions. Using React, JavaScript, and HTML, I developed an easy-to-navigate interface for participants to engage in live group discussions.  This experience provided an opportunity for me to apply computer science priciples to the study of mind and brain, developing my empirical awareness as well as technical skills."
        },
        {
          name:"text",
          href:"https://docs.google.com/presentation/d/1iRkXuWYpIyld8FRK6e6IlNE45Fd3fXjtnF8kvm-1K1Q/edit#slide=id.g13ed3caaa68_0_6",
          content:"Click here to learn more about my contributions to the project."
        },
        {
          name:"text",
          href:"https://github.com/watts-lab/deliberation-empirica",
          content:"Click here to view our main GitHub repository."
        },
        {
          name:"subtitle",
          content:"Institute for Human Machine Cognition"
        },
        {
          name:"text",
          content:"As a research intern, I designed, coded, and conducted a survey to ollect data related to how participants perceive credibility of tweets related to COVID-19.  I first wrote a python script to extract relevant tweets from over 400 Twitter users, then built the survey using HTML, CSS, and PHP.  This experience allowed me to combine my interests of computer science and cognitive science, using cognitive science pricinples to design and conduct the study, but computer science techniques to actually build the survey."
        }
      ]
    if (toRender === "App") {
      return(<App />);
    }

    return (
      <div>
        <div style={{margin: "18px"}}>
          <Button handleClick={() => handleComponent("App")} children="Back to Home"/>
        </div>
        <div className="box">
          <div className="textBox">
            <br />
            <h1 className="heading">
              Recent Work Experiences
            </h1>
            <br/>
            <div className="solid-text" style={{width: "90%"}}>
              <h3 className="subtitle">Computational Social Science Lab</h3>
              <br/>
              <p className="text">
                As a research asisstant in Dr. Watts' Lab at the University of Pennsylvania, I worked 
                to develop and implement a project focused on reducing affective polarization in group 
                disucssions. Using React, JavaScript, and HTML, I developed an easy-to-navigate interface 
                for participants to engage in live group discussions.  This experience provided an opportunity
                 for me to apply computer science priciples to the study of mind and brain, developing my 
                 empirical awareness as well as technical skills.
              </p>
              <br/>
              <div>
                <div style={{display: "flex", padding: "5px", justifyContent: "space-between"}}> 
                  <a 
                    style={{textDecoration: "none"}}
                    className="button-dark" 
                    href="https://docs.google.com/presentation/d/1iRkXuWYpIyld8FRK6e6IlNE45Fd3fXjtnF8kvm-1K1Q/edit#slide=id.g13ed3caaa68_0_6" 
                    target="_blank"
                  >
                    Click here to learn more about this project
                  </a>
                  <a 
                    style={{textDecoration: "none"}}
                    className="button-dark" 
                    href="https://github.com/Watts-Lab/deliberation-empirica" 
                    target="_blank"
                  >
                    Click here to view this project on GitHub
                  </a>
                </div>
                <br/>
              </div>
            </div>
            <br/>

            <div className="solid-text" style={{width: "90%"}}>
              <h3 className="subtitle">MIT Networks and Reputations Project</h3>
              <br/>
              <p className="text">
                This project explores how people develop a shared language in cooperative
                situations and investigates how this idea of shared language impacts hiring 
                decisions. My role in this project involved further expanding and optimizing
                the platform so that participants interacted with bots during the experiment 
                rather than other participants in order to reduce costs.  Each bot's behavior
                was pulled from a random participant's choices in first version of the study, 
                so that the experiment most closely resembled reality, while cutting costs by 
                a third.  This project allowed me to apply computer science techniques to 
                a linguistics and cognitive science project and was my first in-depth experience
                with building AIs.
              </p>
              <br/>
              <div style={{display: "flex", padding: "5px", justifyContent: "center"}}> 
                <a 
                  style={{textDecoration: "none"}}
                  className="button-dark" 
                  href="https://github.com/HagayV1/Networks-and-Reputation" 
                  target="_blank"
                >
                  Click here to view this project on GitHub
                </a>
                <br/>
              </div>
              <br />
            </div>
            <br/>

            <div className="solid-text" style={{width: "90%"}}>
              <h3 className="subtitle">Institute for Human Machine Cognition</h3>
              <br/>
              <p className="text">
              As a research intern, I designed, coded, and conducted a survey to ollect data 
              related to how participants perceive credibility of tweets related to COVID-19.  
              I first wrote a python script to extract relevant tweets from over 400 Twitter 
              users, then built the survey using HTML, CSS, and PHP.  This experience allowed 
              me to combine my interests of computer science and cognitive science, using 
              cognitive science pricinples to design and conduct the study, but computer science
               techniques to actually build the survey.
              </p>
              <br/>
              <div style={{display: "flex", padding: "5px", justifyContent: "center"}}> 
                <a 
                  style={{textDecoration: "none"}}
                  className="button-dark" 
                  href="https://www.ihmc.us/" 
                  target="_blank"
                >
                  Click here to learn more about this company.
                </a>
                <br/>
              </div>
              <br />
            </div>
            <br/>

          </div>
        </div>
      </div>
      
    )
}
