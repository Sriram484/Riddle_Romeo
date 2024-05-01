import React, { useContext, useEffect, useState } from 'react'
import "../../Assets/CSS/Score.css"
import Airplane from "../../Assets/Images/Lottie/AirplaneLottie.json"
import BoySkating from "../../Assets/Images/Lottie/Boy skating.json"
import GirlWalking from "../../Assets/Images/Lottie/GirlWalkingAway.json"
import Lottie from "lottie-react"
import { useLocation, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import { UserStatusContext } from '../useContextComponent/UserStatusProvider';
import { updateScore } from '../Functions/UpdateScore'

const Score = () => {
  const { userStatus } = useContext(UserStatusContext);
  const [quizStatus, setQuizStatus] = useState({
    score: 0,
    difficulty: "",
    questionType: "",
    totalQuestions: 0
  })
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state && location.state.quizStats) {
      setQuizStatus({
        score: location.state.quizStats.score,
        difficulty: location.state.quizStats.difficulty,
        questionType: location.state.quizStats.questionType,
        totalQuestions: location.state.quizStats.totalQuestions
      });
      updateScore(location.state.quizStats);
    }

  }, [location.state]);


  updateScore(userStatus, quizStatus);
  const handleClick = () => {
    navigate("/home");
  }
  return (
    <div className='TotalScore'>
      <Navigation userStatus={userStatus} />
      <div className='ScoreMainContainer'>

        <Lottie animationData={BoySkating} className='ScoreBoy' />

        <div className='ScoreAirplaneContainer'>
          <Lottie animationData={Airplane} className='lottie-animation' />
        </div>
        <div className='ResultContainer'>
          <div className='ScoreDisplayerHeading'>
            <h4>Results</h4>
          </div>
          <div className='ScoreDisplayer'>
            <p className='ScoreDiv'>Your Score : {quizStatus.score}</p>
            <p className='ScoreDiv'>Total Score : {quizStatus.totalQuestions}</p>
            <p className='ScoreDiv'>Type Of Question: {quizStatus.questionType}</p>
            <p className='ScoreDiv'>Difficulty Of the Question : {quizStatus.difficulty}</p>
          </div>
        </div>
        <div className='ScoreHomebutton'>
          <button onClick={handleClick} >Another Quiz</button>
        </div>
        <Lottie animationData={GirlWalking} className='GirlWalking' />
      </div>
    </div>
  )
}

export default Score
