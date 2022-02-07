import React from 'react';
import imagecard from "../images/card1.png"
import staricon from "../images/star.png"

export default function Card(props) {
    return (
        <section className='card--collection'>
            <div className='card'>
                <img src={imagecard} alt="card1"/>
                <div className='card--info'>
                    <div className='card--info--one'>
                        <img src={staricon} alt="star" />
                        <p>5.0 <span className='grey'>(6) <span className='round'></span> USA</span></p>
                    </div>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span className='bold'>From $136</span> / person</p>
                </div>
            </div>
        </section>
    );
}
