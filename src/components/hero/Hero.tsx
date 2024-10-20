import React from "react";
import "./Hero.css";
import SocialMediaIcons from "../Fontawsome/Fontawsome";

const Hero2:React.FC=()=>{
    // const [pointer,setpointer] = useState('');
    // useEffect(()=>{
    //     gsap.to(pointer,{
    //         x:200,
    //         duration:20
    //     })
    // })
    return (
        <div>

        <div className="hero_main">

    <div className="hero">
        <div className="hero_txt">
        <h1>I'm <span>Kartik</span> </h1>
        <p>Crafting Seamless Digital Experiences</p>
        <div className="available">
        <div></div><p>Available for full time position</p>
        </div>
        {/* <p>A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</p> */}
       
        {/* <div className="hero_btn">
            <button><a className="btn btn-primary" href="">Contact Me</a></button>
            <button><a className="btn btn-primary"  href="">Download My Resume</a></button>
        </div> */}
        </div>
        <div className="hero_lottie">
        {/* <DisplayLottie /> */}
        <div className="hero_img">
        <img src="./hero_img.png" alt="" />
        </div>

        </div>
        <div className="hero_right">
            <h1>Full Stack <br /> Developer 
                </h1></div>
        </div>


         <SocialMediaIcons/>
        </div>
        
    </div>
    
);
}

export default Hero2;