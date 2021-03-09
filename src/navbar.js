import React, { useState } from "react"
import Toggle from "react-toggle";
import './navbar.css';


function Navbar(props){
    let show = () =>{
        document.querySelector(".navbar").classList.toggle("open");
    }
    return(
        <nav className="navbar">
            <div className="toggle-btn" onClick={()=> show()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>Chuck Norris Jokes</li>
                <button className="btn" onClick={props.randJoke()}><li onClick={()=> show()}>random</li></button>
            </ul>
        </nav>
    )
}
export default Navbar