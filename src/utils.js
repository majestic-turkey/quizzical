import he from "he"

export default async function getTrivia(number) {
  const response = await fetch(`https://opentdb.com/api.php?amount=${number}&difficulty=medium`).then(res => res.json())
  console.log(`${number} questions fetched`)
  const trivia = response.results.map(q => (
  {question: he.decode(q.question),
    correct_answer: he.decode(q.correct_answer),
    incorrect_answers: q.incorrect_answers.map(ans => he.decode(ans))}
  ))

  return trivia.map(question => {
      return {question: question.question,
              correct_answer: question.correct_answer,
              incorrect_answers: question.incorrect_answers,
              guessed: false
      }
  })
}

/* NB: This is a shamelessly copied implementation of the Fisher-Yates shuffle algorithm. I just moved it to a separate file for better code organization. I cannot mathematic this goodly. */

export function shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}