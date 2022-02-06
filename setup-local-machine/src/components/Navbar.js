import React from "react"
import reactlogo from "../images/react-logo.png"
// not advisable put logo in public folder

export default function Navbar() {
    return (
        <nav>
            <img src={reactlogo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}