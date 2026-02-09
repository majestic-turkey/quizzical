import trivia from "./trivia"
import Question from "./Question"
import {useState} from "react"

export default function Quiz() {
    const [triviaQuestions, setTriviaQuestions] = useState(trivia.map(question => {
        return {question: question.question,
                correct_answer: question.correct_answer,
                incorrect_answers: question.incorrect_answers,
                guessed: false
        }
    }))

    const guessAnswer = (index) => {
        setTriviaQuestions(prev => prev.map((q, i) => i === index ? {...q, guessed: true} : q))
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
    </section>
}