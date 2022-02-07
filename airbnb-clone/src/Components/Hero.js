import React from 'react';
import heroimage from "../images/hero.png"

export default function Hero() {
    return (
        <section className='hero'>
            <img src={heroimage} alt="hero"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of a kind hosts-all without leaving home.</p>
        </section>
    );
}
