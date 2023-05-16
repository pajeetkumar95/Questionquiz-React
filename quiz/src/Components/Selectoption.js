import React from 'react'
import { useNavigate } from 'react-router-dom'

function Selectoption() {

  const startquiznavigate = useNavigate()

  function submitquiz(e){
    e.preventDefault()
    startquiznavigate('/quizdata')
  }



  return (
    <div className='selectoption'>
            <h1>Select Quiz</h1>
        <div className='selectquiz'>
            <input type="radio" id='css' name='css'></input>
            <label htmlFor='css'>Css</label><br/>
            <input type="radio" name='css' id='react'></input>
            <label htmlFor='react'>React</label><br/>
            <input type="radio" id='javascript' name='css'></input>
            <label htmlFor='javascript'>Javasript</label><br/>
            <button type="submit" onClick={submitquiz}>Start Quiz</button>
        </div>
    </div>
  )
}

export default Selectoption