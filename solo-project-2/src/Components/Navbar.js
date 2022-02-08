import React from 'react';
import globeImage from '../images/globe.png'

export default function Navbar() {
    return (
        <nav>
            <img src={globeImage} alt="logo" />
            <h1>my travel journal.</h1>
        </nav>
    );
}
