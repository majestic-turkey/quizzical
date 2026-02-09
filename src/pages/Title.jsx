import { useState } from "react"

export default function Title({ startQuiz }) {
  const [number, setNumber] = useState(10)

  function start() {
    startQuiz(number)
  }

  return <div className={"title-container"}>
    <h1>Quizzical</h1>
    <p>Check your knowledge with fun quizzes!</p>
    <button onClick={start} className="start-btn">Start quiz</button>
    <input id="number" name="questionNumber" type="range" min="1" max="50" step="1" value={number} className="question-number" onChange={e => setNumber(e.target.value)}/>
    <output>{number}</output>
    <label htmlFor="number">Number of Questions</label>
  </div>
}