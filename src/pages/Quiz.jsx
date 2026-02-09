import getTrivia from "./trivia"
import Question from "./Question"
import {useState, useEffect} from "react"

export default function Quiz({ titleReturn, number }) {

    const [triviaQuestions, setTriviaQuestions] = useState([])
    useEffect (() => {
        getTrivia(number).then(data => setTriviaQuestions(data))
    },[number])

    function guessAnswer(index) {
        setTriviaQuestions(prev => prev.map((q, i) => i === index ? {...q, guessed: true} : q))
    }
    
    async function resetQuiz() {
        await getTrivia(number).then(data => setTriviaQuestions(data))
    }

    const triviaEls = triviaQuestions.map((triv, index) => {
        return <Question
            triv={triv}
            index={index}
            key={index}
            guessed={triv.guessed}
            onClick={() => guessAnswer(index)}
            />
    })
    

    return <section className="quiz">
        <div className="quiz-container">
            {triviaEls}
        </div>
        <div className="buttons">
            <button className="start-btn" onClick={titleReturn}>Return to Title</button>
            <button className="start-btn" onClick={resetQuiz}>Restart Quiz</button>
        </div>
    </section>
}