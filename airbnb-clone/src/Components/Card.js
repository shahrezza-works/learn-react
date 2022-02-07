import React from 'react';
// import imagecard from ""
import staricon from "../images/star.png"

export default function Card(props) {
    const img = props.img
    const rating = props.rating
    const reviewCount = props.reviewCount
    const country = props.country
    const title = props.title
    const price = props.price
    return (
        <section>
            <div className='card'>
                <img src={require(`../images/${img}`)} alt="card1"/>
                <div className='card--info'>
                    <div className='card--info--one'>
                        <img src={staricon} alt="star" />
                        <p>{rating} <span className='grey'>({reviewCount}) <span className='round'></span> {country}</span></p>
                    </div>
                    <p>{title}</p>
                    <p><span className='bold'>From ${price}</span> / person</p>
                </div>
            </div>
        </section>
    );
}
