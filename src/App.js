import React, { useEffect, useState } from "react"
import "./App.css"
import QuestionList from "./components/QuestionList"

function App() {
  const [flashcards, setFlashcards] = useState([])

  // GET request to get all flashcards using fetch
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((data) => {
        setFlashcards(
          data.results.map((questionItem, index) => {
            // Take the correct answer and add it to array of incorrect answers and randomly sort them so that the correct answer doesn't appear first
            const answer = decodeString(questionItem.correct_answer)
            const options = [
              ...questionItem.incorrect_answers.map((ans) => decodeString(ans)),
              answer,
            ]
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: questionItem.correct_answer,
              options: options.sort(() => Math.random() - 0.5),
            }
          })
        )
      })
  }, [])

  // A function that decodes the html elements in our questions
  function decodeString(str) {
    const textArea = document.createElement("textarea")
    textArea.innerHTML = str
    return textArea.value
  }

  return <QuestionList flashcards={flashcards} />
}

// const SAMPLE_FLASHCARDS = [
//   {
//     id: 1,
//     question: "What is 2 + 2 ?",
//     answer: "4",
//     options: ["2", "3", "4", "5"],
//   },
//   {
//     id: 2,
//     question: "What comes after 'A' in 'Adam'?",
//     answer: "d",
//     options: ["c", "e", "f", "d"],
//   },
// {
//   id: 3,
//   question: "Who is the queen of England?",
//   answer: "Elizabeth",
//   options: ["Eliezar", "Jane", "Maria", "Elizabeth"],
// },
// {
//   id: 4,
//   question: "Is a dog an animal?",
//   answer: "Yes",
//   options: ["No", "Maybe", "I don't know", "Yes"],
// },
// {
//   id: 5,
//   question: "The fastest man in the world ?",
//   answer: "Bolt",
//   options: ["Bolt", "Trump", "Obama", "Bach"],
// },
// ]

export default App
