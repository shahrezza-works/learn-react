import React from 'react'

export default function Box(props) {

    const styling = {
        backgroundColor: props.status ? "#222222" : "transparent"
    }
    
    return (
        <div className='box' 
            style={styling} 
            onClick={props.handleToggle}>

        </div>
    )
}
