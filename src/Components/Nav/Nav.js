import React from "react"
import "./Nav.css"
import worldIco from "../../images/world.png"
export default function Nav()
{
    return(
            <nav className="nav-bar">
                <img src= {worldIco} className="world-ico" alt="world"/>
                <p className="nav-title">my travel journal.</p>
            </nav>
)}


