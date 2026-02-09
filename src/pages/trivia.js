import he from "he"

const response = await fetch("https://opentdb.com/api.php?amount=10").then(res => res.json())

const trivia = response.results.map(q => (
  {question: he.decode(q.question),
   correct_answer: he.decode(q.correct_answer),
   incorrect_answers: q.incorrect_answers.map(ans => he.decode(ans))}
))

export default trivia