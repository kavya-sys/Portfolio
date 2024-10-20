import React from "react";
import Nav2 from "./components/Nav/Nav";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
// import Switch from "./components/Switch/Switch";
import HomePage from "./components/Projects/Projects";
import 'bootstrap/dist/css/bootstrap.css';
import Mainn from "./MyComponents";
import './App.css'

const App:React.FC =()=>{
    return (
        <div>
            {/* <Nav2/>
            <Hero/>
             */}
            <Mainn/>
        </div>
    ) 
}
export default App;