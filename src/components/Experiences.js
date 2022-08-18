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
        <Button handleClick={() => handleComponent("App")} children="Back"></Button>
        <TextBox
            title="Recent Work Experiences"
            texts={experiencesTexts}
        />
      </div>
      
    )
}
