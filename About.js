import React from "react";
import "./port.css"
import img from "D:/react/myapp/src/portpolio/images/aitam.jpeg"
import inter from "D:/react/myapp/src/portpolio/images/inter.jpeg"
import school from "D:/react/myapp/src/portpolio/images/school.png"
function About()
{
    return(
        <div className="about" id="about">
            <center>
            <h2 className="h2">EDUCATION</h2>
            <p>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</p>
            </center>
            <div className="a">
            <img src={img} className="rounded gimg"/>
            <div className=" ah3">
            <h3 >Graduation</h3><br/>
            <p><span className="s1">College:-</span>Aditya Institute of technology and management</p>
            <p><span className="s1">Course:-</span>Bachelor of Technology</p>
            <p><span className="s1">specialization:-</span>Electronics and Communication Enginnering</p>
            <p><span className="s2">C.G.P.A:-</span>8.13</p>
            <p>2019-2023</p>
            </div>
            </div>
            <br/><br/>
            <div className="b">
            <img src={inter} className="rounded inter"/>
            <div className=" ih3">
            <h3 >Intermediate</h3><br/>
            <p><span className="s1">College:-</span>Sri Chaitanya Junior college</p>
            <p><span className="s1">Course:-</span>MPC</p>
            <p><span className="s2">C.G.P.A:-</span>9.56</p>
            <p>2017-2019</p>
            </div>
            </div>
            <br/><br/>
            <div className="b">
            <img src={school} className="rounded inter"/>
            <div className=" ih3">
            <h3 >Metriculation</h3><br/>
            <p><span className="s1">School:-</span>Narayana School</p>
            <p><span className="s2">C.G.P.A:-</span>9.0</p>
            </div>
            </div>
        </div>
    )
}
export default About