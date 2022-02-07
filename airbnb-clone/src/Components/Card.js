import React from 'react';
// import imagecard from ""
import staricon from "../images/star.png"

export default function Card(props) {
    
    const data = props.item
    const img = data.coverImg
    const rating = data.rating
    const reviewCount = data.reviewCount
    const country = data.location
    const title = data.title
    const price = data.price
    let badgeText 
    if(data.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (data.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className='card'>
            {badgeText && <div className='card--open'>{badgeText}</div>}
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
    );
}
