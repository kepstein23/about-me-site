import React, {useState, useEffect, Children} from "react";
import Collapsible from "react-collapsible";
import App from "../App";
import { Button } from "./Button";
import { Experiences } from "./Experiences";
import { Languages } from "./Languages";
import { Coursework } from "./Coursework";

export function Titles ({name, icon}) {
    return (
        <div className="semesters" style={{display: "flex", justifyContent: "space-between"}}>
            <h1 className="semesters-text" >{name} </h1>
            <h1 className="semesters-icon" style={{marginRight: "10px"}}> {icon} </h1>
        </div>
        
    )
}

export function AllCourses() {
    const storage = window.localStorage;
    const [toRender, setToRender] = useState(storage.getItem("toRender"))
    useEffect(() => {
      storage.setItem('toRender', "App")
    }, [])
    useEffect(() => {
      storage.setItem('toRender', toRender);
    }, [toRender])
  
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
  
    if (toRender === "Languages") {
      return(
          <Languages />
      )
    }
  
    if (toRender === "Project") {
      return(
          <Coursework />
      )
    }

    if (toRender === "App") {
        return(
            <App />
        )
      }

    return (
    //     <div className="menu-bar" style={{display:"flex", justifyContent:"center"}} >
    //     {/* <div style={{padding:"5px"}}> 
    //     <Button handleClick={() => handleComponent("Languages")} children="Campus Involvement" />
    //     </div> */}
    //     <div style={{padding:"5px"}}> 
    //     <Button className="button-dark" handleClick={() => handleComponent("App")} children="Home" />
    //     </div>
    //     <div style={{padding:"5px"}}> 
    //     <Button className="button-dark" handleClick={() => handleComponent("Project")} children="Project Highlights" />
    //     </div>
    //     <div style={{padding:"5px"}}> 
    //     <Button className="button-dark" handleClick={() => handleComponent("Languages")} children="Language Proficiencies" />
    //     </div>
    //     <div style={{padding:"5px"}}> 
    //     <Button className="button-dark" handleClick={() => handleComponent("Coursework")} children="Relevant Coursework" />
    //     </div>
    //     <div style={{padding:"5px"}}>
    //     <Button className="button-dark" handleClick={() => handleComponent("Experiences")} children="Recent Work Experience"/>
    //     </div>
    // </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="box" style={{margin: "0px"}}>
                <div className="solid-text" style={{width: "70%"}}>
                    <h1 className="heading" style={{width: "60%", marginTop: "20px", marginBottom: "20px"}}>
                        Relevant Coursework
                    </h1>
                </div>
                <br/>

                <Collapsible trigger={<Titles name="Fall 2022 (Upcoming)" icon="+"/>} triggerWhenOpen={<Titles name="Fall 2022" icon="-"/>}>
                    <br/>
                    <div className="textBox">
                        <br />
                        <div className="solid-text">
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}>
                                CIS 2400 Computer Systems
                            </h1>
                            <br />
                            <p className="text">
                                This course focused on computer architecture begins with transitors and computer hardware,
                                continues through low-level programming, and ends with an introduction to C.  The course 
                                culminates in building a compiler from scratch.
                            </p>
                            <br />
                        </div>
                        <br />

                        <div className="solid-text">
                            <h1 className="heading" style={{width: "80%"}}>
                                PSYC 3231 Consciousness
                            </h1>
                            <p className="text">

                            </p>
                        </div>
                        <br />

                        <div className="solid-text">
                            <h1 className="heading" style={{width: "80%"}}>
                                MKTG 2340 Systematic Approach to Creativity
                            </h1>
                        </div>
                        <br />
                    </div>
                </Collapsible>
                <br/>

                <Collapsible trigger={<Titles name="Spring 2022" icon="+"/>} triggerWhenOpen={<Titles name="Spring 2022" icon="-"/>}>
                    <br/>
                    <div className="textBox">
                        <br />
                        <div className="solid-text">
                            <h1 className="heading" style={{width: "80%"}}> 
                                MKTG 2370 Brain Science for Business
                            </h1>
                        </div>
                        <br />
                        
                        <div className="solid-text">
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}> 
                                CIS 3500 Software Design/Engineering
                            </h1>
                            <br/>
                            <p className="text">
                                This course focuses on the full stack software development cycle including design, web development,
                                mobile development, testing, refactoring, and deployment.  It emphasies writing clean, efficient, modular 
                                code, and culminates in the creation of two web and mobile apps in React and JavaScript. It 
                                additionally employs many popular frameworks and strategies, such as AGILE project management, GitHub,
                                continuious integration, Cypress testing, Jest, MongoDB, and Heroku. You can learn more about my 
                                experience in the Course Highlights section on my home page.
                            </p>
                            <br/>
                        </div>
                        <br />

                        <div className="solid-text">
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}> 
                                CIS 2620 Automata, Computability, and Complexity
                            </h1>
                            <br/>
                            <p className="text">
                                This course focuses on the full stack software development cycle including design, web development,
                                mobile development, testing, refactoring, and deployment.  It emphasies writing clean, efficient, modular 
                                code, and culminates in the creation of two web and mobile apps in React and JavaScript. It 
                                additionally employs many popular frameworks and strategies, such as AGILE project management, GitHub,
                                continuious integration, Cypress testing, Jest, MongoDB, and Heroku. You can learn more about my 
                                experience in the Course Highlights section on my home page.
                            </p>
                            <br/>
                        </div>
                        <br />

                        <div className="solid-text">
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}> 
                                LING 0750 Language and Thought
                            </h1>
                            <br/>
                        </div>
                        <br />
                    </div>
                </Collapsible>
                <br/>

                <Collapsible trigger={<Titles name="Fall 2021" icon="+"/>} triggerWhenOpen={<Titles name="Fall 2021" icon="-"/>}>
                <br/>
                    <div className="textBox">
                        <br />

                        <div className="solid-text">
                            <br />
                            <h1 className="heading" style={{width: "80%"}}> 
                                CIS 1210 Programming Languages and Techniques II
                            </h1>
                            <br />
                        </div>
                        <br />
                        
                        <div className="solid-text">
                            <br />
                            <h1 className="heading" style={{width: "80%"}}> 
                                LING 1720 Data Science for Study of Language/Mind
                            </h1>
                            <br />
                        </div>
                        <br />

                        <div className="solid-text">
                            <br />
                            <h1 className="heading" style={{width: "80%"}}> 
                                ECON 0100 Microeconomics
                            </h1>
                            <br />
                        </div>
                        <br />

                        <div className="solid-text">
                            <br />
                            <h1 className="heading" style={{width: "80%"}}> 
                                PSYC 0001 Experimental Psychology
                            </h1>
                            <br />
                        </div>
                        <br />
                    </div>
                </Collapsible>
                <br/>

                <Collapsible trigger={<Titles name="Spring 2021" icon="+"/>} triggerWhenOpen={<Titles name="Spring 2021" icon="-"/>}>
                <br/>
                    <div className="textBox">
                        <br />

                        <div className="solid-text">
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}> 
                                CIS 1200 Programming Languages and Techniques I
                            </h1>
                            <br/>
                            <p className="text">
                                Hello
                            </p>
                            <br/>
                        </div>
                        <br />
                        
                        <div className="solid-text">
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}> 
                                NRSC 1110 Brain and Behavior
                            </h1>
                            <br/>
                        </div>
                        <br />
                        
                        <div className="solid-text">
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}> 
                                LING 001 Linguistics
                            </h1>
                            <br/>
                        </div>
                        <br />
                    </div>
                </Collapsible>
                <br/>

                <Collapsible trigger={<Titles name="Fall 2020" icon="+"/>} triggerWhenOpen={<Titles name="Fall 2020" icon="-"/>}>
                    <br/>
                    <div className="textBox">
                        <br />
                        <div className="solid-text">
                            <br />
                            <h1 className="heading" style={{width: "80%"}}> 
                                PHIL 2050 Philosophy of Mind and Language
                            </h1>
                            <br />
                        </div>
                        <br />

                        <div className="solid-text">
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}> 
                                CIS 1100 Programming Languages and Techniques
                            </h1>
                            <br />
                        </div>
                        <br />

                        <div className="solid-text">
                            <br />
                            <h1 className="heading" style={{width: "80%"}}> 
                                COGS 1001 Cognitive Science
                            </h1>
                            <br />
                        </div>    
                        <br />
                    </div>
                </Collapsible>
                <br/>
            </div>
        </div>
    );
}