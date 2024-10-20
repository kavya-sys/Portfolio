import React, {useEffect} from 'react'
import './Gsap.css'
import {GsapAnimation} from '../animation/Gsap'
const Gsap:React.FC=()=> {

    useEffect(()=>{
        GsapAnimation()
      },[]);
  return (
    <div>
      <div className="innercursor">
      </div>
      <div className="outercursor">
      </div>
    </div>
  )
}

export default Gsap
