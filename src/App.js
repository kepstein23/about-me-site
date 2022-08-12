import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button} from './components/Button';
import { TextBox } from './components/TextBox';
import headshot from "./headshot.jpg"

function App() {

  function handleRedirect(link) {
    window.open(link, '_blank')
  }

  const aboutMeText = [
    {
      name: "img",
      content: headshot,
      width: "250",
      height:"200"

    },
    {
      name: "text", 
      content: "Hi, my name is Kimberly Epstein.  I am a Junior at University of Pennsylvania pursuing a double major in Computer Science and Cognitive Science with minors in Consumer Psychology and Linguistics. I am passionate about the intersection of mind and computer science, and have special interests in Web Development, Artificial Intelligence and Natural Language Processing."
    }
    
]

  const experiencesTexts = [
    {
      name:"subtitle",
      content:"Computational Social Science Lab"
    },
    {
      name:"text",
      content:"As a research asisstant, I worked to develop and implement a project focused on reducing affective polarization in group disucssions. Using React, JavaScript, and HTML, I developed an easy-to-navigate interface for participants to engage in live group discussions.  This experience provided an opportunity for me to apply computer science priciples to the study of mind and brain, developing my empirical awareness as well as technical skills."
    },
    {
      name:"text",
      href:"https://docs.google.com/presentation/d/1iRkXuWYpIyld8FRK6e6IlNE45Fd3fXjtnF8kvm-1K1Q/edit#slide=id.g13ed3caaa68_0_6",
      content:"Click here to learn more about my contributions to the project."
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

  const relevantCoursework = [
    {
      name:"subtitle",
      href:"https://catalog.upenn.edu/search/?P=CIS%201210",
      title:"title",
      content:"CIS 1210"
    },
    {
      name:"text",
      content:"Completed Programming Sequence Intro-Programming II"
    },

  ]



  return (
    <div class="flex=container">
      <header>
        Hi, I'm Kimberly Epstein. Welcome to my site!
      </header>
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
      <div style={{padding:"5px"}}>
        <div className="textBox">
          <h1>About Me</h1>
          <div style={{padding: "5px", display:"flex"}}>
            <div style={{padding: "5px"}}>
            < img src={headshot} height="184" width="225"></img>
            </div>
            <div style={{padding: "5px"}}>
              <p>
                Hi, my name is Kimberly Epstein.  I am a Junior at University of Pennsylvania pursuing a double major 
                in Computer Science and Cognitive Science with minors in Consumer Psychology and Linguistics. I am passionate
                about the intersection of mind and computer science, and have special interests in Artificial Intelligence and 
                Natural Language Processing.
              </p>
            </div>
          </div>
        </div>
        {/* <TextBox 
          title="About me"
          texts={aboutMeText}
          // text="Hi, my name is Kimberly Epstein.  I am a Junior at University of Pennsylvania pursuing a double major 
          //   in Computer Science and Cognitive Science with minors in Consumer Psychology and Linguistics. I am passionate
          //   about the intersection of mind and computer science, and have special interests in Artificial Intelligence and 
          //   Natural Language Processing."
        /> */}
        <p></p>
        <TextBox
          title="Recent Experiences"
          texts={experiencesTexts}
        />
        <p></p>
        <TextBox
          title="Relevant Coursework"
          texts={relevantCoursework}
        />
        <p></p>
      </div>
      
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
