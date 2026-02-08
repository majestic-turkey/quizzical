import { useEffect, useState } from "react"
import trivia from "./trivia"

export default function Quiz() {
    const [triviaQuestions, setTriviaQuestions] = useState(trivia.results)

    const triviaEls = triviaQuestions.map((question, index) => {
        return <div key={index}>
            <h3>{question.question}</h3>
            <p>{question.correct_answer}</p>
        </div>
    })

    return <div className="quiz-container">
      <h1>Quiz</h1>
      {triviaEls}
    </div>
}