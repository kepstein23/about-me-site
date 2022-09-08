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

                <Collapsible trigger={<Titles name="Fall 2022 (Current)" icon="+"/>} triggerWhenOpen={<Titles name="Fall 2022" icon="-"/>}>
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
                                culminates in building a compiler from scratch and provides a foundational understanding of
                                the computer as a physical instrument.
                            </p>
                            <br />
                        </div>
                        <br />

                        <div className="solid-text">
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}>
                                PSYC 3231 Consciousness
                            </h1>
                            <br/>
                            <p className="text">
                                This seminar course explores the nerual basis of consciousness, focusing on a
                                firm analysis of related phenomenology.  It primarily considers visual consciousness,
                                as it is the easiest form of consciousness to explore empirically, then moves to
                                exploring mechanisms that create a stream of thought, and concludes with defining
                                the relationship between consciousness and behavior.  Involving the reading and in-depth
                                discussion of several academic neuroscience papers related to consciousness, this course
                                provides a rigorous survey of the field of consciousness and neurologically-based
                                support for a variety of schools of thought.
                            </p>
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
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}> 
                                MKTG 2370 Brain Science for Business
                            </h1>
                            <br/>
                            <p className="text">
                                This course provided an overview of neuromarketing techniques, including insights from both
                                neuroscience and business techniques, and covering applications across disciplines.  Throughout
                                the course, students were tasked with developing a pitch for a product of their creation which 
                                incorporated neuromarketing principles discussed in class, culminating in a final pitch at the
                                end of the course.  You can learn more about my experience in the Project Highlights section on 
                                my home page.
                            </p>
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
                                experience in the Project Highlights section on my home page.
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
                            <p className="text">
                                This course explores how the mind conducts language, thinking, and reasoning at a
                                cognitive level.  Beginning with an introduction to linguistics, it discusses language's
                                potential as a unique human ability, explores the notion of a critical period of language
                                acquisition, and discovers how linguistic and conceptual knowledge interact.

                            </p>
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
                            <p className="text">
                            This course covers popular data structures, such as stacks, queues, maps, trees, graphs, and popular 
                            algorithms, including graph traversals, sorting algorithms, divide and conquer, hashing, etc.  It not only 
                            covers practical implementations of these useful algorithms, but also provides an in-depth theoretical 
                            understanding of how various data structures and algorithms can be used in different circumstances to 
                            effectively optimize time and space efficiency.  This course provides the opportunity to apply theory to 
                            real-world problems, and excites a passion for computer science, as the first instance of began to seeing how
                            code interacts with the real world.
                            </p>
                            <br/>
                            
                        </div>
                        <br />
                        
                        <div className="solid-text">
                            <br />
                            <h1 className="heading" style={{width: "80%"}}> 
                                LING 0700 Data Science for Study of Language/Mind
                            </h1>
                            <br />
                            <p className="text">
                                This course essentially functions as a survey of the R coding language, with special attention to its 
                                applications in the study of mind and language.  Covering concepts including data visualization, predictive
                                algorithms, descriptive statistics, and statistical modeling and employing R libraries such as tidyverse
                                and ggplot, this course provides useful skills for data processing and analysis applicable across disciplines.
                            </p>
                            <br/>
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
                                As the second course in the intro computer science sequence, this course exposes
                                students to the OCaml coding language as well as further expands proficiency in Java.
                                Beginning with OCaml, a functional language, the course emphasizes use of recursion
                                and solidifies an understanding of the differences between functional and object-oriented
                                languages.  Transitioning into the Java segment of the course, CIS 1200 involves writing
                                longer, elegant programs that tackle real world problems.
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
                            <p className="text">
                                As an introduction to neuroscience class, this course surveys the structure and function
                                of the vertebrate nervous system.  Beginning with the cellular basis of the nervous system,
                                it includes the physiological basis of motor control, sensory systems, motivated behaviors,
                                and higher mental processes, with a special focus on the neurobiology of behavior.
                            </p>
                            <br/>
                        </div>
                        <br />
                        
                        <div className="solid-text">
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}> 
                                LING 001 Linguistics
                            </h1>
                            <br/>
                            <p className="text">
                                This course functions as an introduction to the broader field of linguistics.  It includes a general 
                                survey of human language systems, including phonology, morphology, syntax, and psycholinguistics.
                                The course explores language in the context of culture, and develops skills applicable across disciplines.

                            </p>
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
                            <br/>
                            <h1 className="heading" style={{width: "80%"}}> 
                                CIS 1100 Programming Languages and Techniques
                            </h1>
                            <br/>
                            <p className="text">
                                As the first course in the intro computer science sequence, this course provides a solid
                                foundation in the Java programming language.  Beginning from the basics of variables and 
                                data types, it continues through object-oriented programming techniques, building a firm
                                knowledge of Java programming practices. It culminates in a final project of creating a 
                                video game from scratch, providing students the opportunity to employ their object-oriented
                                programming techniques to create an independently unique application.
                            </p>
                            <br/>
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