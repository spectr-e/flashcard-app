// Lists all the questions and answers in our database and ones added by the user.
// Props to be passed:
//   - questions: an array of questions
//   - answers: an array of answers
//   - removeQuestion: a function to remove a question

import React from "react"
import QuestionCard from "./QuestionCard"

function QuestionList(questioncards) {
  return (
    <div className="card-grid">
      {questioncards.map(question => {
        return <Questioncard flashcard={questioncard} key={questioncard.id} />
      })}
    </div>
  )

}

export default QuestionList;
