import React from 'react';
import reactlogo from "../images/react-logo.png"

export default function Navbar(props) {
    return (
    <header className={props.theme === "dark" ? 'navbar' : 'navbar navbar-light'}>
        <div className='nav--brand'>
            <img src={reactlogo} className="nav--logo"/>
            <h1 className='nav--title'>ReactFacts</h1>
        </div>
        <div className='navbar--right'>
            <span>Light</span>
            <span onClick={props.handleClick} className={props.theme === "dark" ? 'navbar--icon' : 'navbar--icon navbar-light'}>
                {props.theme === "dark" && 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                </svg>}

                {props.theme === "light" &&
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
                </svg>}
            </span>
            <span>Dark</span>
            <h3 className={props.theme === "dark" 
            ? 'nav--subtitle' 
            : 'nav--subtitle navbar-light'}>React Course - Project 1</h3>
        </div>
    </header>
    );
}
