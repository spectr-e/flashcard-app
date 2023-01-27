import React, { useEffect, useRef, useState } from "react"
import { Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import NavBar from "./components/NavBar"
import CardPage from "./containers/CardPage"
import FormPage from "./containers/FormPage"
import ListPage from "./containers/ListPage"

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
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <CardPage
            flashcards={flashcards}
            categories={categories}
            categoryEl={categoryEl}
            amountEl={amountEl}
            handleSubmit={handleSubmit}
          />
        </Route>
        <Route path="/create">
          <FormPage />
        </Route>
        <Route path="/questions">
          <ListPage flashcards={flashcards} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
