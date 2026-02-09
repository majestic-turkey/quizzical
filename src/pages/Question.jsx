import clsx from "clsx"
import {shuffle} from "../utils"
import {useMemo} from "react"       

export default function Question ({index, triv, guessed, onClick}) {

    const shuffledAnswers = useMemo(() => shuffle([triv.correct_answer, ...triv.incorrect_answers]), [triv.correct_answer, triv.incorrect_answers])

    return  <div className="trivia-item" key={index} onClick={onClick}>
                <h3>{triv.question}</h3>
                <div className="answers">
                    {shuffledAnswers.map((ans, i) => <p key={i} className={
                        clsx("answer",
                        {"correct": guessed && ans === triv.correct_answer,
                        "incorrect": guessed && ans !== triv.correct_answer}
                        )}>
                            {ans}
                        </p>
                    )}
                </div>
            </div>
}