// Contains the QuestionCard.js component
import React from "react"
import Button from "react-bootstrap/Button"
import QuestionList from "../components/QuestionList"

function CardPage({
  flashcards,
  categories,
  categoryEl,
  amountEl,
  handleSubmit,
}) {
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
          <Button type="submit">Generate</Button>
          {/* <button className="btn" type="submit">
            Generate
          </button> */}
        </div>
      </form>
      <div className="container">
        <QuestionList flashcards={flashcards} />
      </div>
    </>
  )
}

export default CardPage
