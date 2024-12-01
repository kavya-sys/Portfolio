import React from 'react';
import './About.css';
const About:React.FC=()=> {
  return (
    <div className='about'>
        <div className="about_txt">
      <h1>Reach Out to me!</h1>
        <p>Discuss a project or just want to say hi? My Inbox is open for all.</p>      
        <div className="available about_txt_available">
        <div></div><p>Available for full time position</p>
        </div>
        {/* <div className="loc"><FontAwesomeIcon className='loc_icon' icon={faLocationDot} size="1x" style={{color:'black'}} /><p>Greater Nodia, India</p></div> */}
{/* <SocialMediaIcons/> */}
<div>
  <h4>bhatnagarkartik6@gmail.com</h4>
  <div className="ScrollText_btn about_txt_btn">
           <div className="hero_btn">
            <button><a className="btn btn-primary" href="https://www.linkedin.com/in/kartika-bhatnagar/">Linkedin</a></button>
            <button><a className="btn btn-primary"  href=" ">Download My Resume</a></button>
        </div>        
        </div>
</div>
        </div>
        <div className="about_img">
          <img src="./profilePhoto.png" alt="" />
        </div>
    </div>
  )
}

export default About;
