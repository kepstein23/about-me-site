import React, {useState, useEffect} from "react";
import { TextBox } from "./TextBox";
import { Button } from "./Button";
import { Experiences } from "./Experiences";
import { Languages } from "./Languages";
import { AllCourses } from "./AllCourses";
import App from "../App";

export function Coursework() {
  const storage = window.localStorage;
  const [toRender, setToRender] = useState(storage.getItem("toRender"))
  useEffect(() => {
    storage.setItem('toRender', "App")
  }, [])
  useEffect(() => {
    storage.setItem('toRender', toRender);
  })

  // const [toRender, setToRender] = useState("App");

  function handleRedirect(link) {
    window.open(link, '_blank')
  }

  function handleComponent(component) {
    storage.setItem("toRender", component);
    setToRender(component);
    console.log(storage.getItem("toRender"));
      // setToRender(component);
  }

  if(toRender ==="Experiences") {
      return(
          <Experiences />
      )
  }

  if (toRender === "Coursework") {
      return(
          <AllCourses />
      )
  }

  if (toRender === "Languages") {
    return(
        <Languages />
    )
  }

  if (toRender === "App") {
    return(
        <App />
    )
  }

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
      <div>
        {/* <div className="menu-bar" style={{display:"flex", justifyContent:"center"}} >
          <div style={{padding:"5px"}}> 
            <Button handleClick={() => handleComponent("Languages")} children="Campus Involvement" />
          </div>
          <div style={{padding:"5px"}}> 
            <Button className="button-dark" handleClick={() => handleComponent("App")} children="Home" />
          </div>
          <div style={{padding:"5px"}}> 
            <Button className="button-dark" handleClick={() => handleComponent("Project")} children="Project Highlights" />
          </div>
          <div style={{padding:"5px"}}> 
            <Button className="button-dark" handleClick={() => handleComponent("Languages")} children="Language Proficiencies" />
          </div>
          <div style={{padding:"5px"}}> 
            <Button className="button-dark" handleClick={() => handleComponent("Coursework")} children="Relevant Coursework" />
          </div>
          <div style={{padding:"5px"}}>
            <Button className="button-dark" handleClick={() => handleComponent("Experiences")} children="Recent Work Experience"/>
          </div>
        </div> */}
        <div className="box" style={{padding: "20px"}}>
          <div className="textBox">
            <br />
            <h1 className="heading">
              Project Highlights
            </h1>
            <br/>
            {/* <div className="solid-text" style={{width: "90%"}}>
              <h3 className="subtitle">Programming Languages and Techniques II</h3>
              <br/>
              <p className="text">
                This course covers popular data structures, such as stacks, queues, maps, trees, graphs, and popular algorithms, 
                including graph traversals, sorting algorithms, divide and conquer, hashing, etc. The course taught not only 
                practical implementations of these useful algorithms, but also provided an in-depth theoretical understanding of 
                how various data structures and algorithms can be used in different circumstances to effectively optimize time and
                space efficiency.  Through this course, I learned how to apply theory to real-world problems, and, though challenging,
                further excited my passion for computer science, as I first began to see how code could interact with the real world.
              </p>
              <br/>
            </div>
            <br/> */}

            <div className="solid-text" style={{width: "90%"}}>
              <h3 className="subtitle">Software Design/Engineering</h3>
              <br/>
              <p className="text">
                This course explored the full software development process from design to front end, to back end, to testing
                and refactoring.  Applying common practices in software engineering, such as AGILE project management, this
                course's homeworks culminated in the design and implementation of both a mobile and web version of a "Guess 
                The Celebrity" game in Javascript and React.  Additionally, I completed a semester-long group project resulting
                in the mobile and web version of Mood-Tracking App, also in JavaScript and React, complete with features such 
                as a social media feed, chat, daily mood logging, media upload, and more.  Through this course, I gained hands-on web
                and mobile app development experience, and practiced the entire development cycle from early design stages to depoloyment.
              </p>
              <br/>
              <div style={{display: "flex", justifyContent: "space-between", width: "80%", margin: "auto"}}> 
                <a 
                  style={{textDecoration: "none"}}
                  className="button-dark" 
                  href="http://calm-beach-22652.herokuapp.com/" 
                  target="_blank"
                >
                  Click here to play "Guess Who".
                </a>
                <a 
                  style={{textDecoration: "none"}}
                  className="button-dark" 
                  href="https://github.com/cis350/mood-tracker-team28" 
                  target="_blank"
                >
                  Click here to view Cloud9 on GitHub.
                </a>
                <br/>
              </div>
              <br />
            </div>
            <br/>

            <div className="solid-text" style={{width: "90%"}}>
              <h3 className="subtitle">Brain Science for Business</h3>
              <br/>
              <p className="text">
                This course explored various neuromarketing techniques and how they impact business, education,
                ethics, policy, etc. This course culminated in a class team competition, where each week two teams
                would present give a one-minute pitch of a startup of their creation, while the other teams chose
                how much \"PlattBucks\" they wanted to invest.  After investing, each team either won or lost Platt
                Bucks based on how well the professor thought the startup would thrive in the real world.  The 
                startup my team created was a public health initiative in the form of a recipe app which subconsciously
                incentivized users to make healthy choices when choosing recipes. Click below to learn more about our 
                app, and the science behind it. At the end of the term, my team ended with the highest Platt Bucks tally
                in the class and won the Benjamin Franklin Award for the business plan most likely to make a positive 
                contribution to society.
              </p>
              <br/>
              <div style={{display: "flex", padding: "5px", justifyContent: "center"}}> 
                <a 
                  style={{textDecoration: "none"}}
                  className="button-dark" 
                  href="https://docs.google.com/presentation/d/1Rs4LdfEiiYWdcputc_XUGIbjPUFEKhTx5rHXtpfFpNo/edit#slide=id.g115df2c994c_0_10" 
                  target="_blank"
                >
                  Click here to learn more about Choice.
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