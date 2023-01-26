import React from 'react'
import QuestionCard from './QuestionCard'

export default function QuestionList({questioncards}) {
  return (
    <div className="card-grid">
      {questioncards.map(questioncard => {
        return <QuestionCard questioncard={questioncard} key={questioncard.id} />
      })}
    </div>
  )
}
