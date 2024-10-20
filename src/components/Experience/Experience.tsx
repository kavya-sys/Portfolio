import React from "react";
import './Experience.css'
import Switch from "../Switch/Switch";
const Exprerience: React.FC = () => {
    
    return (
      <div className="Experience">
        <div className="Experience_heading ">
          <h1 className="text-align-center">My Experiences</h1>
          <p>Coding My Way Through Innovation</p>
        </div>

        <div className="Experience_Content justify-content-center d-flex">
          <div className="card">
            <div className="card_txt">
              <h1>CodSoft</h1>
            </div>
            <img src="./codsoft.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">Web Developer</h2>
              <h6 className="card-text">Sep 23 - Aug 23</h6>
              <p className="card-text">
              At Codesoft, I built server-side projects with PHP, MySQL, and Tailwind, including a full-featured blogging website
              </p>
             
            </div>
          </div>
          <div className="card">
            <div style={{ background: "black" }} className="card_txt">
              <h1>Cyber Invaders</h1>
            </div>
            <img src="./cyberinvader.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">Vice President</h2>
              <h6 className="card-text">Jan 23 - Present</h6>
              <p className="card-text">
              As VP of Cyber Invader, I led 5+ events, teaching 500+ students cybersecurity and web development.
              </p>
             
            </div>
          </div>
          <div className="card">
            <div style={{ background: "green" }} className="card_txt">
              <h1>GFG Club</h1>
            </div>
            <img src="./gfg.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">Technical Co-head</h2>
              <h6 className="card-text">Jan 24 - Present</h6>
              <p className="card-text">
              As GFG's Technical Head, I handled the technical aspect for hackathons, coding, and website competitions.
              </p>
              
            </div>
          </div>
        </div>
        {/* <Switch/> */}
      </div>
    );
}
export default Exprerience;