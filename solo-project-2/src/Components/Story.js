import React from 'react';
import  tagImage from "../images/tag.png"

export default function Story(props) {
    
    console.log(props)
    return (
        <div className='story'>
            <div className='content'>
                <img className='story--image'
                    src={props.image_url} alt="story"/>
                <div>
                    <div className='story--location'>
                        <img src={tagImage} alt="tagging" className='map--tagging'/>
                        <span className='map--country'>{props.location}</span>
                        <a rel="noreferrer" target="_blank" href={props.google_map_url} className='map--url'>
                            View on Google Maps
                        </a>
                    </div>
                    <h1 className='location'>{props.title}</h1>
                    <h5 className='story--date'>{props.start_date} - {props.end_date}</h5>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}
