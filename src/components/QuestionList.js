// Lists all the questions and answers in our database and ones added by the user.
// Props to be passed:
//   - questions: an array of questions
//   - answers: an array of answers
//   - removeQuestion: a function to remove a question

import React from "react"



function QuestionList({ flashcards }) {
 return (
   <div className="card-grid">
     {flashcards.map((flashcard) => {
       return <QuestionCard flashcard={flashcard} key={flashcard.id} />
     })}
   </div>
 )

}


export default QuestionList
