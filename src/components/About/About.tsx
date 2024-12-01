import React from 'react';
import './About.css';
const About:React.FC=()=> {
  return (
    <div>
        <div className="about_txt about flex-column flex justify-center">
      <h1>Let's work together</h1>
        <p>Have a project in mind? Let's create something amazing...</p>      
        {/* <div className="available about_txt_available">
        <div></div><p>Available for full time position</p>
        </div> */}
        {/* <div className="loc"><FontAwesomeIcon className='loc_icon' icon={faLocationDot} size="1x" style={{color:'black'}} /><p>Greater Nodia, India</p></div> */}
{/* <SocialMediaIcons/> */}

  <button  className='px-4 py-2 text-white bg-transparent my-4 border border-1 rounded-4'>
    <a className='text-decoration-none text-white' href="href='https://www.linkedin.com/in/kartika-bhatnagar/'">
    Get in touch
    </a>
  </button>
  {/* <div className="ScrollText_btn about_txt_btn">
           <div className="hero_btn">
            <button><a className="btn btn-primary" href="https://www.linkedin.com/in/kartika-bhatnagar/">Linkedin</a></button>
            <button><a className="btn btn-primary"  href=" ">Download My Resume</a></button>
        </div>        
        </div> */}
        {/* <div className="about_img">
          <img src="./profilePhoto.png" alt="" />
          </div> */}
    </div>
    </div>
  )
}

export default About;
