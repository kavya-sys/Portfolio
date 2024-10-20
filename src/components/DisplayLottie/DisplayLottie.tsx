// import React, {Component, Suspense} from "react";
// import Lottie from "lottie-react";
import Lottie from 'react-lottie';
import animationData from "../../assets/lottie/heroo.json"

// export default class DisplayLottie extends Component {
//   render() {
//     const animationData = this.props.animationData;
//     const defaultOptions = {
//       loop: true,
//       autoplay: true,
//       animationData: animationData
//     };

//     return (
//       <Suspense>
//         <Lottie
//           animationData={defaultOptions.animationData}
//           loop={defaultOptions.loop}
//         />
//       </Suspense>
//     );
//   }
// }

export default function DisplayLottie() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={500}
        width={400}
      />
    </div>
  );
}
