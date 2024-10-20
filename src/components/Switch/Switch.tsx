// import React, { useState } from 'react';

// const Switch: React.FC=() => {
//   const [a,b]=useState(0);
//   return (
//     <div>
//       <h1>{a}</h1>
//       <button onClick={()=>b(10)}>Click ME</button>
//     </div>
//   );
// };

// export default Switch;

import React, { useState } from 'react';

const Switch = () => {
  // State variable to control the visibility of the component
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Component
      </button>

      {isVisible && (
        <div className="component-to-toggle">
          <p>This component is toggled on and off.</p>
        </div>
      )}
    </div>
  );
};

export default Switch;
