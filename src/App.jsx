import { useState } from "react"
import Title from "./pages/Title"
import Quiz from "./pages/Quiz"

function App() {

  const [page, setPage] = useState("title")

  return (<>
    {page === "title" && <Title startQuiz={() => setPage("quiz")} />}

    {page === "quiz" && <Quiz titleReturn={() => setPage("title")} restartQuiz={() => setPage("quiz")} />}
  </>)
}

export default App