import React from 'react'
import Quiz from './Quiz'
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';


export default function QuizSection(props) {
    const [questions, setQuestions] = React.useState([])
    const [complete, setComplete] = React.useState(false)
    const [correctAnswer, setCorrectAnswer] = React.useState(0)
    
    const LoadingIndicator = props => {
        const { promiseInProgress } = usePromiseTracker();
        return (
            promiseInProgress && 
            <div className='Loader'>
                <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                                begin="0s" dur="0.8s"
                                values="15;9;15" calcMode="linear"
                                repeatCount="indefinite" />
                        <animate attributeName="fillOpacity" from="1" to="1"
                                begin="0s" dur="0.8s"
                                values="1;.5;1" calcMode="linear"
                                repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                        <animate attributeName="r" from="9" to="9"
                                begin="0s" dur="0.8s"
                                values="9;15;9" calcMode="linear"
                                repeatCount="indefinite" />
                        <animate attributeName="fillOpacity" from="0.5" to="0.5"
                                begin="0s" dur="0.8s"
                                values=".5;1;.5" calcMode="linear"
                                repeatCount="indefinite" />
                    </circle>
                    <circle cx="105" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                                begin="0s" dur="0.8s"
                                values="15;9;15" calcMode="linear"
                                repeatCount="indefinite" />
                        <animate attributeName="fillOpacity" from="1" to="1"
                                begin="0s" dur="0.8s"
                                values="1;.5;1" calcMode="linear"
                                repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>
        );  
    }
    function shufflePositionArray() {
        const positionArray = [0, 1, 2, 3]
        const newPositionArray = positionArray.sort(() => 
            (Math.random() > .5) ? 1 : -1)
        return newPositionArray
    }
    function correctAnswerPositionIndex(newPositionArray) {
        return newPositionArray.indexOf(0)
    }

    React.useEffect(() => {
        
        const fetchData = async () => {
            const data = await trackPromise(fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple'))
            const json = await data.json()
            
            
            const newArray = json.results.map(data => {
                const randomPos = shufflePositionArray()
                const answerPos = correctAnswerPositionIndex(randomPos)

                return {...data, randomPos:randomPos, answerPos:answerPos, alreadyAnswer: false, complete: false}
            })

            setQuestions(newArray)
        }

        fetchData()
        .catch(console.error)

    }, [])

    function chooseAnswer(QuestionIndex, chooseId) {
        setQuestions(prevQuestions => {
            return prevQuestions.map((data, indexData) => {
                if(indexData !== QuestionIndex){
                    return data
                }else{
                    return {...data, selectedAnswer:chooseId, alreadyAnswer: true}
                }
            })
        })
    }

    const quizlist = questions.map((data, index) => {
        return <Quiz 
            key={index}
            quizId={index}
            quizDetails={data}
            randomPosition={data.randomPos}
            answerIndex={data.answerPos}
            triggerChooseAnswer={chooseAnswer}
            complete={complete}
        />
    })

    function triggerCheckAnswer() {
        
        const validateAllAlreadyAnswer = questions.filter(data => {
            return data.alreadyAnswer === false
        })

        if(validateAllAlreadyAnswer.length > 0){
            alert("Please answer all question!")
            return false
        }

        const countCorrectAnswer = questions.filter(data => {
            return data.answerPos === data.selectedAnswer
        })

        setComplete(true)

        setQuestions(prevQuestions => {
            return prevQuestions.map(data => {
                return {
                    ...data,
                    complete: true
                }
            })
        })

        setCorrectAnswer(countCorrectAnswer.length)
    }

    return (
        <div className='quiz--section'>
            
            <h1>Quizzical</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores.</p>
            <LoadingIndicator/>
            {quizlist}
            {
            complete
            ?
            <div className='quiz--footer'>
                    <h2>You scored {correctAnswer}/5 correct answers</h2>
                    <button onClick={props.triggerPlayAgain}>Play Again</button>
            </div>
            :
            <div className='quiz--footer'>
                <button onClick={triggerCheckAnswer}>Check Answer</button>
            </div>
            }
        </div>
    )
}
