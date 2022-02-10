import React from 'react';

export default function Joke(props) {

    const setup = props.setup
    const punchline = props.punchline
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }

    return (
    <div>
        {setup && <h4>Setup: {setup}</h4>}
        
        {isShown && <p>Punchline: {punchline}</p>}
        <button onClick={toggleShown}>{isShown === true ? "Hide" : "Show"} Puncline</button>
        <hr />
    </div>
    );
}
