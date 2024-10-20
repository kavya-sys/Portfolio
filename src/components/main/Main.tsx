import React from "react";
import Lottie from 'react-lottie';
import animationData from "../../assets/lottie/spaceboy.json"
import './Main.css';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJava, faJs, faReact, faNode, faAws,faPhp, faPython, faDocker, faGithub, faGitlab} from '@fortawesome/free-brands-svg-icons';
library.add(faHtml5, faCss3, faJava, faJs, faReact, faNode, faAws,faPhp, faPython, faDocker, faGithub);

const Main: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }}

  //   useEffect(()=>{
  //     gsap.from(".Main_Lottie",{
  //         scrollTrigger:{
  //             trigger:'.Main_Lottie',
  //             start:'top 100%',
  //             end:'top 35%',
  //             scrub:true,
  //             markers:false,  
  //           },
  //           x:-100,
  //           opacity:0,
  //           duration:2,
  //           // opacity:0,
  //     })
  // })


  return (
    <div className="Main">
      <div className="Main_Content">
        <div className="Main_Lottie">
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
        <div className="Main_txt">
          <h1>What I do</h1>
          <p className="mb-0 text-">Transforming Ideas into Functional Web Applications</p>
          <br />
          <p className="mb-2">⚡ Creating responsive, engaging interfaces with React, Gsap, and TailWindcss</p>
             <p className="mb-2">⚡ Building secure, scalable server-side solutions using Node.js</p>
            <p className="mb-4">⚡ Delivering seamless full-stack applications for optimized user experiences.</p>

            <div className="Main_txt_icon1">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faHtml5} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>Html</p>
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCss3} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>Css</p>
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faJs} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>JavaScript</p>
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faJava} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>Java</p>
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faReact} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>React</p>
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faNode} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>NodeJs</p>
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPhp} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>Php</p>
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faAws} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>Aws</p>
        </a>
       </div>
       <div className="Main_txt_icon1">
        
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPython} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>Python</p>
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDocker} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>Docker</p>
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>Github</p>
        </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGitlab} size="3x" style={{color:'black', opacity:'50%'}}/>
          <p>GitLab</p>
        </a>  
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Main;