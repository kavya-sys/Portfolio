import React from "react";
import './Projects.css'
const Projects:React.FC=()=>{
  return(
    <div className="projects">
      <h1>Exploring My Projects</h1>
      <p>Projects That Define My Journey
        
      </p>
      <div className="project_cards">
        <div className="card_project">
          <img src="./chess_logo.png" alt="" />
          <div className="card_txt_project">
            <h1>ChessMate.io</h1>
            <p>Checkmate.io is a real-time chess game built with <br /> Express, Node.js, Socket.io, and Chess.js.</p>
            <div className="card_txt_project_btn">
            <a href="https://chess-com-vhzl.onrender.com/">Live Demo</a>
            <a href="https://github.com/kavya-sys/ChessMate.io">Github</a>
            </div>
          </div>
        </div>
        <div className="card_project">
          <img src="./newsly.png" alt="" />
          <div className="card_txt_project">
            <h1>Newsly</h1>
            <p>Newsly is news aggregator built with Express, Node.js, <br /> Reactjs, uses different news api.</p>
            <div className="card_txt_project_btn">
            <a href="https://newsly-delta.vercel.app/">Live Demo</a>
            <a href="https://github.com/kavya-sys/Newsly">Github</a>
            </div>
          </div>
        </div>
      
      </div>


   


    </div>
  );
}
export default Projects;