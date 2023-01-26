import React, { useEffect, useRef, useState } from "react"
import "./App.css"
import QuestionList from "./components/QuestionList"

function App() {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])
  const categoryEl = useRef(null)
  const amountEl = useRef(null)

  // A function that decodes the html elements in our questions
  function decodeString(str) {
    const textArea = document.createElement("textarea")
    textArea.innerHTML = str
    return textArea.value
  }

  // GET request to get all categories using fetch
  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(() => data.trivia_categories)
      })
      .catch((error) => console.error(error))
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    // GET request to get all flashcards using fetch
    fetch(
      "https://opentdb.com/api.php?" +
        new URLSearchParams({
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        })
    )
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
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* Category Filter */}
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className="form-group">
          {/* No of Questions Filter */}
          <label htmlFor="amount">Number of Questions</label>
          <input
            type="number"
            id="amount"
            min="1"
            step="1"
            defaultValue={10}
            ref={amountEl}
          ></input>
        </div>
        <div className="form-group">
          {/* Submit Button */}
          <button className="btn" type="submit">
            Generate
          </button>
        </div>
      </form>
      <div className="container">
        <QuestionList flashcards={flashcards} />
      </div>
    </>
  )
}

export default App
