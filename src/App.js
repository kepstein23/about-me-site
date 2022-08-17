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

  const relevantCoursework = [
    {
      name:"subtitle",
      title:"title",
      content:"CIS 1210 Programming Languages and Techniques II"
    },
    {
      name:"text",
      content:"This course covers popular data structures, such as stacks, queues, maps, trees, graphs, and popular algorithms, including graph traversals, sorting algorithms, divide and conquer, hashing, etc. (Click above for full course sylabus)  The course taught not only practical implementations of these useful algorithms, but also provided an in-depth theoretical understanding of how various data structures and algorithms can be used in different circumstances to effectively optimize time and space efficiency.  Through this course, I learned how to apply theory to real-world problems, and, though challenging, further excited my passion for computer science, as I first began to see how code could interact with the real world."
    },

    {
      name:"subtitle",
      title:"title",
      content:"CIS 3500 Software Design/Engineering"
    },
    {
      name:"text",
      content: "This course explored the full software development process from design to front end, to back end, to testing and refactoring.  Applying common practices in software engineering, such as AGILE project management, this course's homeworks culminated in the design and implementation of both a mobile and web version of a \"Guess The Celebrity\" game in Javascript and React.  Additionally, I completed a semester-long group project resulting in the mobile and web version of Mood-Tracking App, also in JavaScript and React, complete with features such as a social media feed, chat, daily mood logging, media upload, and more.  Through this course, I gained hands-on web and mobile app development experience, and practiced the entire development cycle from early design stages to depoloyment."
    },
    {
      name: "text",
      href: "http://calm-beach-22652.herokuapp.com/",
      content: "Play my \"Guess Who\" web app here."
    },
    {
      name: "text",
      href: "https://github.com/cis350/mood-tracker-team28",
      content: "View my mood tracker repository here."
    },
    {
      name: "subtitle",
      content: "MKTG 2370 Brain Science for Business"
    },
    {
      name: "text",
      content: "This course explored various neuromarketing techniques and how they impact business, education, ethics, policy, etc. This course culminated in a class team competition, where each week two teams would present give a one-minute pitch of a startup of their creation, while the other teams chose how much \"PlattBucks\" they wanted to invest.  After investing, each team either won or lost Platt Bucks based on how well the professor thought the startup would thrive in the real world.  The startup my team created was a public health initiative in the form of a recipe app which subconsciously incentivized users to make healthy choices when choosing recipes. Click below to learn more about our app, and the science behind it. At the end of the term, my team ended with the highest Platt Bucks tally in the class and won the Benjamin Franklin Award for the business plan most likely to make a positive contribution to society."
    },
    {
      name: "text",
      href: "https://docs.google.com/presentation/d/1Rs4LdfEiiYWdcputc_XUGIbjPUFEKhTx5rHXtpfFpNo/edit#slide=id.g115df2c994c_0_10",
      content: "View our final pitch here."
    }

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
          title="Coursework Highlights"
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
