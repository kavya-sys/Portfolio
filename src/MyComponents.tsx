// import React from "react";
import React, { useRef } from 'react';
import Nav2 from "./components/Nav/Nav";
import Hero2 from "./components/hero/Hero";
import Main from "./components/main/Main";
import 'bootstrap/dist/css/bootstrap.css';
import Exprerience from "./components/Experience/Experience";
import "./style.css"
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Preloader from './components/Preloader/Preloader';
import Gsap from './components/gsap/Gsap';
import Hero3 from './components/Hero3/Hero3';;


const Mainn: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  return (
    <div>
    
      <div>

        <Gsap/>
        <Nav2 aboutRef={aboutRef} workRef={workRef}/>
        <Preloader/>
        <Hero2 />
        <Hero3 />
        <Main />
        {/* <ScrollBar/> */}
        <div ref={workRef}>
        <Projects  />
        </div>
        <Exprerience />
        {/* <About /> */}
        <div ref={aboutRef}>
        <About />
      </div>
      </div>
    </div>
  )
}
export default Mainn;