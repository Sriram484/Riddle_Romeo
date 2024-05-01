import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TrendingQuiz from '../WebComponents/TrendingQuiz'
import CustomQuiz from '../WebComponents/CustomQuiz';
import QuestionDisplayer from '../WebComponents/QuestionDisplayer';
import LogIn from '../WebComponents/LogIn';
import Signup from '../WebComponents/Signup';
import Missing from '../WebComponents/Missing';
import ProfilePage from '../WebComponents/ProfilePage';
import LeaderBoard from '../WebComponents/LeaderBoard';
import Score from '../WebComponents/Score';
import QuizOfTheDay from '../WebComponents/QuizOfTheDay';
import QuizOfTheDayQuestionDisplayer from '../WebComponents/QuizOfTheDayQuestionDisplayer';



const Routing = () => {
  const [category,setCategory] = useState("19");

  return (
    <>
      <Routes>
      <Route exact path='/' element={<TrendingQuiz category = {category} setCategory={setCategory} />}/>
      <Route exact path='/home' element={<TrendingQuiz category = {category} setCategory={setCategory} />}/>
      <Route exact path='/cus' element={<CustomQuiz />}/>
      <Route exact path='/QuestionDisplayer' element={<QuestionDisplayer />}/>
      <Route exact path='/log' element={<LogIn />}/>
      <Route exact path='/sig' element={<Signup />}/>
      <Route exact path='/profile' element={<ProfilePage />}/>
      <Route exact path='/leaderboard' element={<LeaderBoard />}/>
      <Route exact path='/score' element={<Score />}/>
      <Route exact path='/DayQuiz' element={<QuizOfTheDay />}/>
      <Route exact path='/QuizOfTheDayQuestionDisplayer' element={<QuizOfTheDayQuestionDisplayer />}/>
      <Route exact path='/*' element={<Missing />}/>
      </Routes>
      

    </>
    
  )
}

export default Routing
