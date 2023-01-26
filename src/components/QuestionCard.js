// Displays a card with questions and answers for the user to answer.
// Figure out how to display the correct answer.
// Props to be passed in:
// - question: the question to be displayed
// - answer: the answer to be displayed
// - correctAnswer: the correct answer to be displayed

import React, { useState } from "react"

function QuestionCard({ flashcard }) {
  const [flip, setFlip] = useState(false)

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return (
              <div className="flashcard-option" key={option}>
                {option}
              </div>
            )
          })}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  )
}

export default QuestionCard
