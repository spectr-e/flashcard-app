// Allows the user to add custom questions and answers to the app.
// Props to be passed:
//   question: string
//   answer: string
//   onChange: function
//   onSubmit: function
//   onReset: function


import React,{useState} from 'react'


function AddQuestionForm() {
  const [questions,setQuestions]=useState({
    question: '',
    answer: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: ''

  })
  function handleSubmit(event){
    event.preventDefault()
    document.location.reload();
    setQuestions({
    ...questions,
      question: event.target.question.value,
      answer: event.target.answer.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value,
      answer4: event.target.answer4.value,
      answer5: event.target.answer5.value
    })
  }
  console.log(questions)

  function handleChange(event) {
    event.preventDefault()
    setQuestions({
    ...questions,
      [event.target.name]: event.target.value
    })
  }
  
  return (
    <div className='container' style={{background:"#D1F2EB" ,width:"50%",height:"85vh",padding:"30px",marginTop:"30px",borderRadius:"20px"}}>
      <h1>Submit a Question</h1>
      <div class="mb-3">
        <form onSubmit={handleSubmit}>
  <label for="exampleFormControlInput1" class="form-label">Enter question</label>
  <input type="text" onChange={handleChange}  class="form-control" id="exampleFormControlInput1" name="question"/>
  <label for="exampleFormControlInput1" class="form-label"> Correct answer</label>
  <input type="text" onChange={handleChange}  class="form-control" id="exampleFormControlInput1" name="answer"/>
  <label for="exampleFormControlInput1" class="form-label">Incorrect answer1</label>
  <input type="text"  onChange={handleChange} class="form-control" id="exampleFormControlInput1" name="answer2"/>
  <label for="exampleFormControlInput1" class="form-label">Incorrect answer2</label>
  <input type="text" onChange={handleChange} class="form-control" id="exampleFormControlInput1"  name="answer3"/>
  <label for="exampleFormControlInput1" class="form-label">Incorrect answer3</label>
  <input type="text" onChange={handleChange}  class="form-control" id="exampleFormControlInput1" name="answer4"/>
  <label for="exampleFormControlInput1" class="form-label">Incorrect answer4</label>
  <input type="text" onChange={handleChange}  class="form-control" id="exampleFormControlInput1" name="answer5" />


  <input className="btn btn-primary"type="submit"/>
  </form>



</div>
<div>
  
</div>
    </div>
  )
}

export default AddQuestionForm








