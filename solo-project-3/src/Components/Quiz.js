import React from 'react'
import { nanoid } from 'nanoid'

export default function Quiz(props) {
    // console.log(props)
    const quizData = props.quizDetails
    const question = quizData.question
                        .replace(/&amp;/g, "&")
                        .replace(/&#039;/g, "'")
                        .replace(/&quot;/g, '"')
    const correctAnswer = quizData.correct_answer
    const choices = [correctAnswer, ...quizData.incorrect_answers]

    const positionArray = props.randomPosition

    const choicesBtn = positionArray.map((data, index) => {
        //button--selected
        //button--correct--answer
        let labelColor = ''
        let buttonInlineCss = {}
        if(quizData.alreadyAnswer){
            if(index === quizData.selectedAnswer){
                labelColor = 'button--selected'
            }
        }

        if(quizData.complete){
            if(index === quizData.answerPos && 
                quizData.selectedAnswer !== quizData.answerPos){
                labelColor = 'button--correct--answer'
            }

            buttonInlineCss = {cursor: "default"}
        }
        
        const uniqueId = nanoid()
        return <button 
        style={buttonInlineCss}
        key={uniqueId} 
        id={index}
        value={choices[data].replace(/&#039;/g, "'")}
        onClick={quizData.complete ? (e) => {e.preventDefault()}: ()=>{props.triggerChooseAnswer(props.quizId, index)}}
        className={labelColor}
        >
            {choices[data].replace(/&#039;/g, "'")}
        </button>
    })

    return (
        <div className='quiz'>
            <h3 className='quiz--question'>{question}</h3>
            <div className='quiz--choices'>
                {choicesBtn}
            </div>
            <hr />
        </div>
    )
}
