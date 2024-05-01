import React, { useEffect } from 'react'
import { SpringQuestion as questions } from '../Data/Spring'
import { useNavigate } from 'react-router-dom'

const QuizOfTheDay = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/QuizOfTheDayQuestionDisplayer', { state: { questions } });
    },[])
  return (
    <div>
      
    </div>
  )
}

export default QuizOfTheDay
