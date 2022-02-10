import React from 'react';
import brandLogo from '../images/logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={brandLogo} alt="brand" className='brand' />
            <h1>Meme Generator</h1>
            <h4>React Course - Project 3</h4>
        </nav>
    );
}
