import React from 'react';
import reactlogo from "../images/react-logo.png"

export default function Navbar() {
    return (
    <header className='navbar'>
        <div className='nav--brand'>
            <img src={reactlogo} className="nav--logo"/>
            <h1 className='nav--title'>ReactFacts</h1>
        </div>
        <h3 className="nav--subtitle">React Course - Project 1</h3>
    </header>
    );
}
