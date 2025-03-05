import React, { useEffect, useState } from "react";
import './ScrollText.css';
import SplitType from "split-type";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

const ScrollText: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger)

    const [splitTypesText]= useState('Fully Motivated software developer who wants to explore every tech stack⚡Develop highly interactive Front end and Backend for your web applications⚡ From front-end design to back-end development,⚡ I strive to deliver clean, efficient, and scalable solutions that meet modern web standards. ');
    // const st=document.querySelector('.reaveal-type')

    // splitTypesText.map((char,i)
    
    useEffect(()=>{
        const text = new SplitType('.reveal-type',{types:'chars,words'})
        // console.log(text);
        gsap.from(text.chars,{
            scrollTrigger:{
                trigger:'.reveal-type',
                start:'top 80%',
                end:'top 20%',
                scrub:true,
                markers:false,  
              },
            opacity:0.1,
            stagger:0.8,ease: "steps(40)",
        })
    },[splitTypesText]);
    
    // splitTypes.forEach((char,i)=>{
    //     const text = new SplitTypes(char);
    // })
    // useEffect(()=>{

    //     const lenis = new Lenis();
    //     lenis.on('scroll',(e)=>{
    //         // console.log(e);
    //     })
    //     function raf(time:number) {
    //         lenis.raf(time)
    //         requestAnimationFrame(raf);
    //     }
        
    //     requestAnimationFrame(raf)

    //     return()=>{
    //         lenis.destroy();
    //     }
    // },[]);



  return (
    <div className="ScrollText">
        <section>

          <p className="mb-0 reveal-type">{splitTypesText}</p>
        </section>
        <div className="ScrollText_btn">
           <div className="hero_btn">
         <button><a className="btn btn-primary" href="https://www.linkedin.com/in/vanshika-jain-55b273254/">Contact Me</a></button>
            <button><a className="btn btn-primary"  href=" ">Download My Resume</a></button>
        </div>        
        </div>
        </div>

  )
}

export default ScrollText;