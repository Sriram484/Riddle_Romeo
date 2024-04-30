import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../Components/WebComponents/Navigation'
import TrendingQuiz from '../Components/WebComponents/TrendingQuiz'
import CustomQuiz from '../Components/WebComponents/CustomQuiz';
import QuestionDisplayer from '../Components/WebComponents/QuestionDisplayer';
import LogIn from '../Components/WebComponents/LogIn';
import Signup from '../Components/WebComponents/Signup';
import Missing from '../Components/WebComponents/Missing';
import ProfilePage from '../Components/WebComponents/ProfilePage';
import LeaderBoard from '../Components/WebComponents/LeaderBoard';
import Score from '../Components/WebComponents/Score';
import App from '../Components/WebComponents/LoadingPage';
import QuizOfTheDay from '../Components/WebComponents/QuizOfTheDay';
import QuizOfTheDayQuestionDisplayer from '../Components/WebComponents/QuizOfTheDayQuestionDisplayer';



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
      <Route exact path='/loading' element={<App />}/>
      <Route exact path='/DayQuiz' element={<QuizOfTheDay />}/>
      <Route exact path='/QuizOfTheDayQuestionDisplayer' element={<QuizOfTheDayQuestionDisplayer />}/>
      <Route exact path='/*' element={<Missing />}/>
      </Routes>
      

    </>
    
  )
}

export default Routing
