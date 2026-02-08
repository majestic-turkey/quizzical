export default function Title({ startQuiz }) {
    return <div className={"title-container"}>
      <h1>Quizzical</h1>
      <p>Check your knowledge with fun quizzes!</p>
    <button onClick={startQuiz} className="start-btn">Start quiz</button>
    </div>
}