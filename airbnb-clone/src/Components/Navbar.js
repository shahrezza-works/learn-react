import React from 'react';
import airbnb from "../images/airbnb.png"

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={airbnb} alt="brand logo" className="navbar--image" />
        </nav>
    );
}
