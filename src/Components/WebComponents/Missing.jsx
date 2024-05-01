import React from 'react'
import "../../Assets/CSS/Missing.css"
import Robot from "../../Assets/Images/RobotError.json"
import Lottie from "lottie-react"
const Missing = () => {
  return (
    <div className='MissingContainer'>
      <div className='MissingContinerHeading'>
        <h3>It's a Breakup</h3>
        <p>If you are seeing this page, then <span>congratulations! you have successfully broken our website.</span></p> <p>Please reload the app. If the issue persists, kindly change the topic of your question, as our servers might be down.</p>
      </div>
      <Lottie animationData={Robot} className='ErrorRobo'/>
    </div>
  )
}

export default Missing
