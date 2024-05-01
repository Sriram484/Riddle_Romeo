import React, { useContext, useEffect, useState } from 'react'
import "../../Assets/CSS/Score.css"
import Airplane from "../../Assets/Images/AirplaneLottie.json"
import BoySkating from "../../Assets/Images/Boy skating.json"
import GirlWalking from "../../Assets/Images/GirlWalkingAway.json"
import Lottie from "lottie-react"
import { useLocation, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import axios from "axios";
import { UserStatusContext } from '../useContextComponent/UserStatusProvider';

const Score = () => {
  const { userStatus } = useContext(UserStatusContext);
    const [quizStatus,setQuizStatus] = useState({
        score:0,
        difficulty:"",
        questionType:"",
        totalQuestions:0
    })
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state && location.state.quizStats) 
        {
            setQuizStatus({
                score:location.state.quizStats.score,
                difficulty:location.state.quizStats.difficulty,
                questionType:location.state.quizStats.questionType,
                totalQuestions:location.state.quizStats.totalQuestions
            });
            updateScore(location.state.quizStats);
        }

    }, [location.state]);

    
    const updateScore = async (quizStats) => {
      try {
        const scoreResponse = await axios.get(`https://riddle-romeo-login-api-8.onrender.com/api/v1/score/search/${userStatus.scoreId}`);
        console.log(scoreResponse);
        console.log(quizStats);
        console.log(userStatus.scoreId);
        let mul = 1;
        if(quizStats.difficulty==="easy")
        {
          mul = 1;
        }
        else if(quizStats.difficulty==="medium")
        {
          mul = 2;
        }
        else{
          mul = 3;
        }
        const newOverallScore = scoreResponse.data.overAllScore + mul*quizStats.score;
        await axios.put(`https://riddle-romeo-login-api-8.onrender.com/api/v1/score/edit/${userStatus.scoreId}`, {
              
                userId:userStatus.userId,
                overAllScore: newOverallScore
          });
          console.log("Score updated successfully:", newOverallScore);
          console.log(userStatus.overallScore);
      } catch (error) {
          console.error("Error updating score:", error);
      }
  };
    const handleClick = ()=>{
      navigate("/home");
    }
  return (
    <div className='TotalScore'>
      <Navigation userStatus={userStatus}/>
    <div className='ScoreMainContainer'>
     
        <Lottie animationData={BoySkating} className='ScoreBoy'/>
 
      <div className='ScoreAirplaneContainer'>
        <Lottie animationData={Airplane}  className='lottie-animation'/>
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
        <Lottie animationData={GirlWalking} className='GirlWalking'/>
    </div>
    </div>
  )
}

export default Score
