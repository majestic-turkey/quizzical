import { useState } from "react"
import Title from "./pages/Title"
import Quiz from "./pages/Quiz"

function App() {

  const [page, setPage] = useState({ name: "title", questionNumber: 5 })

  function startQuiz(value) {
    setPage(prev => ({ ...prev, name: "quiz", questionNumber: Number(value) }))
  }

  function titleReturn() {
    setPage(prev => ({ ...prev, name: "title" }))
  }

  return (<>
    {page.name === "title" && <Title startQuiz={startQuiz} setPage={setPage} />}

    {page.name === "quiz" && <Quiz titleReturn={titleReturn} number={page.questionNumber} />}
  </>)
}

export default App