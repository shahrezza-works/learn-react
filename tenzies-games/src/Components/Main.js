import React from 'react'
import Die from './Die'
import Confetti from 'react-confetti'

export default function Main() {

    const [dice, setDice] = React.useState(allNewDice())
    const [firstNumber, setFirstNumber] = React.useState(0);
    const [complete, setComplete] = React.useState(false)

    React.useEffect(() => {
        if(dice.filter(die => die.isHeld === true).length === 10){
            setComplete(true)
        }
    }, [dice])

    function allNewDice(){
        const diceArray = []
        for(let i=0; i<10; i++){
            const number = Math.floor(Math.random()*6)+1
            diceArray.push({id:i+1, value: number, isHeld: false})
        }
        return diceArray
    }

    function dieFaceClick(event, dieId, value){
        if(firstNumber === value || firstNumber === 0){
            setFirstNumber(prevNumber => (prevNumber === 0 ? value : prevNumber))

            setDice(dice => {
                const newArray = dice.map(die => {
                    if(die.id === dieId  && die.isHeld === false && die.value === value){
                        return {id:dieId, value:die.value, isHeld:true}
                    }else{
                        return {...die}
                    }
                })
                return newArray
            })
        }
    }

    function resetNumber()
    {
        setDice(allNewDice());
        setComplete(false)
        setFirstNumber(0)
    }

    function generateNewNumber() {
        setDice(prevDice => {
            const newArray = prevDice.map(die => {
                if(die.isHeld === true){
                    return {...die}
                }else{
                    return {
                        id: die.id,
                        value: Math.floor(Math.random()*6)+1,
                        isHeld: false
                    }
                }
            })
            return newArray
        })
    }

    const diceFace = dice.map((die, index) => {
        return <Die 
            key={index} 
            id={die.id}
            value={die.value} 
            isHeld={die.isHeld} 
            dieFaceClick={dieFaceClick}
        />
    })
    
    return (
        <div className='main'>
            {complete && <Confetti />}
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

            <div className='dice'>
                {diceFace}
            </div>
            <div className='bottom'>

            <button type='button' 
                onClick={complete ? resetNumber : generateNewNumber}>
                {complete ? "New Games" : "Roll"}
            </button>
            </div>
        </div>
    )
}
