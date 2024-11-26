import React from 'react'
import './Preloader.css'
import gsap from 'gsap';
// import {preLoaderAnim} from '../animation/PreLoader'
import { useGSAP } from '@gsap/react';
const Preloader:React.FC=()=> {
  // useEffect(()=>{
  //   preLoaderAnim();
  //   // return ()=>{
  //   //   if(animationContent){
  //   //     animationContent.revert();
  //   //   }
  //   // };
  // },[]);
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 0.5,
      delay: 0.2,
      y: 70,
      // skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 0.5,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .to(".preloader",{
        duration: 0.7,
        height: "0vh",
        ease:"power4.in",
      })
    
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    })
    
    tl
    .from('.hero_lottie',{
      y:100,
      ease:"slow(0.7,0.1,false)",
      opacity:0,
      duration:0.5
    })
    .from('.hero_txt',{
      x:150,
      opacity:0,
      duration:0.7,
      zIndex:0,
    })
    .from('.hero_right',{
      x:-150,
      opacity:0,
      duration:0.7,
      zIndex:0     
    },"-=0.8")
    .from(".SocialMediaIcon",{
      opacity:0,
      y:50,
      duration:0.7,
    },"=-0.8")
    .from('nav',{
      y:-70,
      opacity:0,
      duration:0.6,
    },"=-0.9")
  })

  return (
    <div className='preloader'>
      <div className="texts-container">

      <span>Developer, </span>
      <span>Creator, </span>
      <span>Vibe</span>
      </div>
    </div>
  );
}

export default Preloader;
