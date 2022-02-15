import React from 'react'

export default function Die(props) {

    return (
        <button 
            type='button' 
            className={props.isHeld ? "face--green" : ""}
            onClick={(event) => props.dieFaceClick(event, props.id, props.value)}
        >
            {props.value}
        </button>
    )
}
