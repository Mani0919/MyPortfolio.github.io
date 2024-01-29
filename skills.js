import React from "react";
import "./port.css"
function Skill()
{
    return(
        <>
        <br/><br/>
        <div className="Skill" id="skills">
            <h1>My Skills</h1>
            <li><h3>Java</h3>
            <span className="bar"><span className="java"></span></span>
            </li>
            <li>
                <h3>Javascipt</h3>
                <span className="bar"><span className="javascript"></span></span>
            </li>
            <li>
                <h3>jQuery</h3>
                <span className="bar"><span className="jquery"></span></span>
            </li>
            <li>
                <h3>React.js</h3>
                <span className="bar"><span className="react"></span></span>
            </li>
            <li>
                <h3>MySQL</h3>
                <span className="bar"><span className="sql"></span></span>
            </li>
            <li>
                <h3>HTML & CSS</h3>
                <span className="bar"><span className="html"></span></span>
            </li>
            <li>
                <h3>Bootstrap</h3>
                <span className="bar"><span className="bootstrap"></span></span>
            </li>
            <li>
                <h3>JDBC</h3>
                <span className="bar"><span className="jdbc"></span></span>
            </li>
        </div>
        </>
    )
}
export default Skill