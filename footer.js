import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "./port.css"
function Footer()
{
    return(
    <div className="footer">
        <div >
        <center>
        <a href="mailto:tangudumanikanta123@gmail.com" className="abc">
          <MdOutlineEmail /></a>&nbsp;
            <a href="https://www.linkedin.com/in/manikanta-tangudu/" className="abc"><CiLinkedin /></a>&nbsp;
            <a href="https://github.com/Mani0919" className="abc">
            <FaGithub />
            </a>
            <p>
                Address:Tekkalipatnam Village,Palasa Mandal
            </p>
            <p>
                Srikakulam dist,Andhra Pradesh,India
            </p>
            <p>2024</p>
        </center>
        </div>
        </div>
    )
}
export default Footer