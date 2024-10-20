import React from 'react'
import './Education.css'

const Education:React.FC=()=>{
  return (
    <div className='edu_main'>
        <h1>Education</h1>
        <div className="edu_card">

        <div className="edu">
            <img src="./niet_logo.png" alt="" />
            <div className="edu_txt">
                <h3>NIET, Greater Noida, UP</h3>
                <h5>Bachelor of Technology in Computer Science</h5>
                <p>Jaunary 2022 - November 2024</p>
            </div>
        </div>
        <span></span>
        
        <div className="edu">
            <img src="./ddps_logo.png" alt="" />
            <div className="edu_txt">
                <h3>DDPS, Bijnor, UP</h3>
                <h5>Senior Secondary in Science</h5>
                <p>Jaunary 2022 - November 2024</p>
            </div>
        </div>
        <span></span>
    </div>
    </div>
  )
}

export default Education;
