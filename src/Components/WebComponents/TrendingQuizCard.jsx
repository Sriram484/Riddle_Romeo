import React from 'react'

import "../../Assets/CSS/TrendingQuizCard.css"
import QuestionObjectCreator from "../Functions/QuestionObjectCreator";
import { useNavigate } from 'react-router-dom';
import UrlCreator from '../Functions/UrlCreator';
import { handleQuestionsPromise } from '../Functions/QustionPromise';


const TrendingQuizCard = ({category,Level,Number_of_Questions,imageUrl,Type,Points}) => {
    const navigate = useNavigate();
    const result = {
      id:category,
      category:"General Knowledge",
      difficulty:Level,
      amount:Number_of_Questions,
      type:Type

  };
    const handleQuizClick =()=>{
      //QusetionPromise Function
      handleQuestionsPromise(result, navigate);
    }

    //Format the Text
    const capitalize = (str) => {
      try {
        if (!str) {
          return 'Unknown';
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
      } catch (error) {
        console.error("Error in capitalize function:", error);
        return 'Unknown';
      }
    };
    
    //Format the type of question
    const formatType = (type) => {
      try {
        if (!type) {
          return 'Unknown';
        }
        if (type.toLowerCase() === 'multiple') {
          return 'MCQ';
        } else if (type.toLowerCase() === 'boolean') {
          return 'True/False';
        }
        return type;
      } catch (error) {
        console.error("Error in formatType function:", error);
        return 'Unknown';
      }
    };
    
    
    return (
        <div className="card">
           
            <div className='container'>
            <img className="product--image" src={require(`../../Assets/Images/${imageUrl}.jpeg`)}  alt="product image" />
          </div>
          <div className='TrendingQuizCardBody'>
          <p style={{ color: "black", margin: "10px" }}>Level: {capitalize(Level)}</p>
      <p style={{ color: "black", margin: "10px" }}>Number of Questions: {Number_of_Questions}</p>
      <p style={{ color: "black", margin: "10px" }}>Type: {capitalize(Type)}</p> {/* Capitalize the Type */}
      <p style={{ color: "black", margin: "10px" }}>Points: {Points}</p>
      {Type && <p style={{ color: "black", margin: "10px" }}>Type: {formatType(Type)}</p>} {/* Format and render the Type */}
          </div>  
            
          <div className="btn">
            <button id="cart" onClick={handleQuizClick}>Do Now</button>
          </div>
        </div>
      );
}

export default TrendingQuizCard
