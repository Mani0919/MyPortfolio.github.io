import React from "react";
import "./port.css";
import chatbot from "D:/react/myapp/src/portpolio/images/chatbot.jpeg"
import Bank from "D:/react/myapp/src/portpolio/images/bank.jpeg"
import todo from "D:/react/myapp/src/portpolio/images/todo.png"
import ecom from "D:/react/myapp/src/portpolio/images/e-com.png"
import weather from "D:/react/myapp/src/portpolio/images/weather.jpeg"
function Contact() {
  return (
    <>
      <br /><br />
      <div className="contact" id="contact">
        <center>
          <h3>PROJECTS</h3>
          <p>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</p>
        
        <div className="cp">
        <div class="card" style={{ width: '18rem' }}>
       <img class="card-img-top" src={chatbot} alt="Card image cap"/>
      <div class="card-body">
        <p class="card-text text-white">ChatBot using IBM Watson</p>
    </div>
</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class="card" style={{ width: '17rem' }}>
       <img class="card-img-top" src={Bank} alt="Card image cap"/>
      <div class="card-body">
        <p class="card-text text-white">Bank Database Management System using MySQL</p>
    </div>
</div>      
</div>
<div class="card" style={{ width: '17rem',background:"#345161",border:"1px solid white",margin:"20px 0px"}}>
  <p class="card-text text-info" style={{fontSize:"1.3em"}}>React.js Projects</p>
  <div className="cimg">
  <img src={todo} alt="err" style={{width:"60px",height:"70px",borderRadius:"50%",marginLeft:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={ecom} alt="err" style={{width:"60px",height:"70px",borderRadius:"50%",marginRight:"40px"}}/>
  </div>
  <div className="cspan">
  <span class="text-white" style={{marginLeft:"0px"}}>Todo-App</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <span class="text-white" style={{marginRight:"0px"}}>E-Commerce</span>
  <p class="text-white" style={{marginLeft:"80px"}}>Website</p>
  </div>
  <img src={weather} alt="err"style={{width:"60px",height:"70px",borderRadius:"50%",marginLeft:"100px"}} />
  <p class="text-white">Weather Report</p>
</div>
</center> 

      </div>
    </>
  );
}

export default Contact;
