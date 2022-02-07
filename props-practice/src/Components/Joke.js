import React from 'react';

export default function Joke(props) {

    const setup = props.setup
    const punchline = props.punchline
console.log(props)
    return (
    <div>
        {setup && <h4>Setup: {setup}</h4>}
        <p>Punchline: {punchline}</p>
        <hr />
    </div>
    );
}
