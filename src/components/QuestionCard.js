// Displays a card with questions and answers for the user to answer.
// Figure out how to display the correct answer.
// Props to be passed in:
// - question: the question to be displayed
// - answer: the answer to be displayed
// - correctAnswer: the correct answer to be displayed

import React from "react"

function QuestionCard({questionCard}) {
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight, backHeight, 100))
  }

  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])

  return (
    <div
    className={`card ${flip ? 'flip' : ''}`}
    style={{ height: height }}
    onClick={() => setFlip(!flip)}
  >
    <div className="front" ref={frontEl}>
      {flashcard.question}
      <div className="flashcard-options">
        {flashcard.options.map(option => {
          return <div className="flashcard-option" key={option}>{option}</div>
        })}
      </div>
    </div>
    <div className="back" ref={backEl}>{flashcard.answer}</div>
  </div>
  )
  
}

export default QuestionCard;
