import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../Components/Navigation'
import TrendingQuiz from '../Components/TrendingQuiz'
import CustomQuiz from '../Components/CustomQuiz';



const Routing = () => {
  const [category,setCategory] = useState("30");
  return (
    <>
      <Navigation />
      
      <Routes>
      <Route exact path='/home' element={<TrendingQuiz category = {category} setCategory={setCategory}/>}/>
      <Route exact path='/cus' element={<CustomQuiz/>}/>
      </Routes>
      

    </>
    
  )
}

export default Routing
