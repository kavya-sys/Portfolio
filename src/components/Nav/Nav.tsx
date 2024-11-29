import React from "react";
import './Nav.css'

interface Nav2Props {
  aboutRef: React.RefObject<HTMLDivElement>;
  workRef: React.RefObject<HTMLDivElement>;
}

const Nav2: React.FC<Nav2Props> = ({aboutRef,workRef})=>{
  const handleScrollToAbout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Prevent the default link behavior
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToWork = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Prevent the default link behavior
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (

    <div className="nav_main">

      <nav>
        <div className="logo">
          Kartik Bhatnagar
        </div>
        <div className="navItems">
          <ul>
            <li><a href=" ">Home </a><span></span> 
            {/* <span className="navSpan active"></span> */}
            </li>
            <li><a href=" " onClick={handleScrollToWork}>Work</a> <span></span> </li>
            <li><a href=" " onClick={handleScrollToAbout}>About</a> <span></span> </li>
          </ul>
        </div>
      </nav>

    </div>


);
};
export default Nav2;