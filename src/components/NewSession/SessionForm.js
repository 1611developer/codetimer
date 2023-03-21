import React, { useState } from 'react'
import './SessionForm.css'

const SessionForm = () => {
  const [enteredLang, setEnteredLang] = useState('')
  const [enteredTime, setEnteredTime] = useState('')
  const [enteredMood, setEnteredMood] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const langChangeHandler = (event) => {
    setLang(event.target.value)
  }
  const timeChangeHandler = (event) => {
    setTime(event.target.value)
  }
  const moodChangeHandler = (event) => {
    setMood(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  }
  return (
    <form>
      <div className='new-session__controls'>
        <div className='new-session__control'>
          <label>Languages / Frameworks</label>
          <input
            type='text'
            onChange={langChangeHandler}
            placeholder='HTML, React, Laravel, TypeScript...'
          />
        </div>
        <div className='new-session__control'>
          <label>Recorded Time</label>
          <input
            type='number'
            onChange={timeChangeHandler}
            min='0.01'
            step='0.01'
            placeholder='input time in decimal'
          />
        </div>
        <div className='new-session__control'>
          <label>Mood</label>
          <input
            type='text'
            onChange={moodChangeHandler}
            placeholder='how do you feel about your session?'
          />
        </div>
        <div className='new-session__control'>
          <label>Date</label>
          <input
            type='date'
            onChange={dateChangeHandler}
            min='01-01-2023'
            max='12-31-2023'
          />
        </div>
      </div>
      <div className='new-session__actions'>
        <button type='submit'>Add Session</button>
      </div>
    </form>
  )
}

export default SessionForm
