import React, { useEffect, useState } from "react";
import './Hero3.css';
import SplitType from "split-type";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

const Hero3: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger)

    const [splitTypesText]= useState('CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK⚡ Develop highly interactive Front end and Backend for your web applications⚡ From front-end design to back-end development,⚡ I strive to deliver clean, efficient, and scalable solutions that meet modern web standards.⚡ ');
    // const st=document.querySelector('.reaveal-type')

    // splitTypesText.map((char,i)
    
    useEffect(()=>{
        const text = new SplitType('.reveal-type',{types:'chars,words'})
        // console.log(text);
        gsap.from(text.chars,{
            scrollTrigger:{
                trigger:'.reveal-type',
                start:'top 80%',
                end:'top 35%',
                scrub:true,
                markers:false,  
              },
            opacity:0.2,
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
    <div className="Hero3">
        <section>

          <p className="mb-0 reveal-type">{splitTypesText}</p>
        </section>
        <div className="Hero3_btn">
           <div className="hero_btn">
         <button><a className="btn btn-primary" href="https://www.linkedin.com/in/kartika-bhatnagar/">Contact Me</a></button>
            <button><a className="btn btn-primary"  href=" ">Download My Resume</a></button>
        </div>        
        </div>
        </div>

  )
}

export default Hero3;