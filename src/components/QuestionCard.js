// Displays a card with questions and answers for the user to answer.
// Figure out how to display the correct answer.
// Props to be passed in:
// - question: the question to be displayed
// - answer: the answer to be displayed
// - correctAnswer: the correct answer to be displayed

import React, { useEffect, useRef, useState } from "react"
function QuestionCard({ flashcard }) {
 const [flip, setFlip] = useState(false)
 const [height, setHeight] = useState("initial")


 const frontEl = useRef(null)
 const backEl = useRef(null)


 function setMaxHeight() {
   // getting the height of the front side and back side of the card
   const frontHeight = frontEl.current.getBoundingClientRect().height
   const backHeight = backEl.current.getBoundingClientRect().height


   // all we want to do is set height value to the max height of any of the sides of the card and set a default minimum height
   setHeight(() => Math.max(frontHeight, backHeight, 100))
 }


 // Set the height of the card to always recalculate when the question/answer/options change
 useEffect(() => {
   setMaxHeight()
 }, [flashcard.question, flashcard.answer, flashcard.options])


 // Set the height of the card to always recalculate when the page size (everytime we resize our browser) changes
 useEffect(() => {
   window.addEventListener("resize", setMaxHeight)
   // cleanup - gets called when the component destroys itself
   return () => window.removeEventListener("resize", setMaxHeight)
 }, [])


 return (
   <div
     className={`card ${flip ? "flip" : ""}`}
     style={{ height: height }}
     onClick={() => setFlip(!flip)}
   >
     <div className="front" ref={frontEl}>
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
     <div className="back" ref={backEl}>
       {flashcard.answer}
     </div>
   </div>
 )
}


export default QuestionCard;
