import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


var main = document.querySelector('body');
var cursor = document.querySelector('.outercursor');

main.addEventListener('mousemove',function(dets){
    if(dets.target.tagName.toLowerCase() === 'a' || dets.target.tagName.toLowerCase() === 'button'){

        
        gsap.to('.innercursor',{
            opacity:0,
        })
        gsap.to('.outercursor',{
            scale:2,
        })
        
    }
    else if(dets.target.tagName.toLowerCase() !== 'a' || dets.target.tagName.toLowerCase() !== 'button'){
        gsap.to('.innercursor',{
            opacity:1,
        })
        gsap.to('.outercursor',{
            scale:1,
        })
        
    }
    
    
    gsap.to('.innercursor',{
        x:dets.x,
        y:dets.y,
        duration:0.2
    })
    gsap.to('.outercursor',{
        x:dets.x-20,
        y:dets.y-20,
        duration:0.3
    })
    
})

export const GsapAnimation=()=>{
    // gsap.to('.page2 h1',{
    //     opacity:1,
    //     scale:2,
    //     yoyo:1,
    //     scrollTrigger:{
    //         trigger:".page2 h1",
    //         scroller:"body",
    //         // markers:true,
    //         start:'top 50%',
    //         end:'bottom 30%',
    //         scrub:true
    //     }
    // })
}
