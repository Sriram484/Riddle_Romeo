import React from 'react'

import "../../Assets/CSS/TrendingQuizCard.css"
import QuestionObjectCreator from "../Functions/QuestionObjectCreator";
import { useNavigate } from 'react-router-dom';


const TrendingQuizCard = ({category,Level,Number_of_Questions,imageUrl,Type,Points}) => {
    const navigate = useNavigate();
    const handleQuizClick =()=>{
      const URL = `https://opentdb.com/api.php?amount=${Number_of_Questions}&category=${category}&difficulty=${Level}&type=${Type}`
      console.log(URL);
      const QuestionsPromise = QuestionObjectCreator(URL);
        console.log(imageUrl);
   
      QuestionsPromise.then(({ responseCode, questions }) => {
       
          if(responseCode===1)
          {
              navigate("/missing");
          }
          else{
              navigate('/QuestionDisplayer', { state: { questions, responseCode } });
          }
      }).catch(error => {
          console.error("Error fetching questions:", error);
      });
    }

    const capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
  
    // Function to format the Type based on its value
    const formatType = (type) => {
      if (type.toLowerCase() === 'multiple') {
        return 'MCQ';
      } else if (type.toLowerCase() === 'boolean') {
        return 'True/False';
      }
      // Add more conditions as needed for other types
      return type; // Return the original type if no match
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
      {Type && <p style={{ color: "black", margin: "10px" }}>Formatted Type: {formatType(Type)}</p>} {/* Format and render the Type */}
          </div>  
            
          <div className="btn">
            <button id="cart" onClick={handleQuizClick}>Do Now</button>
          </div>
        </div>
      );
}

export default TrendingQuizCard
