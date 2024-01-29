import React from "react";
import "./port.css";
import image from "D:/react/myapp/src/portpolio/images/1679674459767.jpg";
import About from "./About";
import Skill from "./skills";
import Contact from "./project";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import Footer from "./footer";
import pdf from "D:/react/myapp/src/portpolio/resume/Resume(MK).pdf"

function Port() {
  const download = (url) => {
    fetch(url).then(response=>response.blob()).then(blob=>
        {
            const burl=window.URL.createObjectURL(new Blob([blob]))
            const fileName = url.split("/").pop();
            const anchor = document.createElement("a");
            anchor.href = burl;
            anchor.setAttribute("download", fileName);
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        })
 
  };
  const hireme=()=>
  {
    return <Contact/>
  }

  return (
    <>
    
      <header className="main">
        <h3 className="logo">Portfolio..</h3>
        <nav className="navbar">
          <a  href="#">Home</a>
          <a  href="#about" onClick={()=><About/>}>About</a>
          <a  href="#skills">Skills</a>
          <a href="#contact">Projects</a>
        </nav>
      </header>
      <section className="section">
        <div className="section-contebt">
          <h3>Hello, I am</h3>
          <h1>Manikanta Tangudu</h1>
        </div>
        <img src={image} alt="error" className="img" />
        <div className="section-logo">
        <div className="c-logo">
         <a href="#" className="ab">
          <CiPhone /><span>6303388146</span></a>
         <a href="mailto:tangudumanikanta123@gmail.com" className="ab">
          <MdOutlineEmail /></a>
         <a href="#" className="ab" >
          <FaWhatsapp /><span>6303388146</span></a>
         <a href="https://www.instagram.com/mani_kanta_t/" className="ab"><FaInstagram /></a>
         <a href="https://www.linkedin.com/in/manikanta-tangudu/" className="ab"><CiLinkedin /></a>
         </div>
          <button className="btn btn-outline-primary" onClick={() => download(pdf)}>
            Download Resume
          </button>
        </div>
      </section>
      <About/>
      <Skill/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default Port;
