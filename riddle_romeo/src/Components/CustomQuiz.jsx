import "../Assets/CSS/CustomQuiz.css"
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import UrlCreator from "./Trivia_API/UrlCreator";
import QuetionObjectCreator from "./Trivia_API/QuetionObjectCreator";

const CustomQuiz = () => {
    const navigate = useNavigate();
    const [result,setResult] = useState({
        id:9,
        category:"General Knowledge",
        difficulty:"easy",
        amount:0,
        type:"multiple"

    });

    const [optionArray,setOptionArray] = useState([]);

    const handleCategoryChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        setResult(prevState => ({
            ...prevState,
            id: optionArray[selectedIndex].id,
            category: optionArray[selectedIndex].name
        }));
        
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(value);
        setResult(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

   const handleSubmit = ()=>{
    if(result.amount<=0)
    {
        alert(`Kindly enter the "Number of Questions" greater than 0`);
    }
    else{
        console.log(result);
        const URL = UrlCreator(result);
        console.log(URL);
        const QuestionsPromise = QuetionObjectCreator(URL);
    
        QuestionsPromise.then(Questions => {
            navigate('/QuestionDisplayer', { state: { questions: Questions } });
            console.log(Questions);
        }).catch(error => {
            
            console.error("Error fetching questions:", error);
        });
        }
   }

    
  useEffect(()=>{
    const fetch = async()=>{
        try{
            const list = await axios.get(`https://opentdb.com/api_category.php`);
            if(list.status!==200)
            {
                throw new Error("Invalid")
            }
           
              setOptionArray(list.data.trivia_categories);
        }
        catch(e)
        {
            
        }
    }
    fetch();
   
},[]);

  return (
   <div className="CustomQuiz">
        <div className="CustomQuiz_Head">
            <h2>Let's Quiz Our Way to Romance</h2>
        </div>

        <div className="CustomQuiz_Body">
           
            <table className="CustomQuiz_Form">
                <tr>
                    <td>
                        <label htmlFor="category">Choose your Genre</label>
                            </td>
                            <td>
                        <select name="category" type="text" onChange={handleCategoryChange}>
                        {
                            optionArray.map((obj,index)=>{
                                return (
                                    <option key={index}>{obj.name}</option>
                                )
                            })
                        }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="Level">Choose your Difficulty</label>
                    </td>
                    <td>
                      
                        <select name="difficulty" type="text" onChange={handleInputChange}>
                            <option value="easy" >Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="amount">Choose number of Questions</label>
                    </td>
                    <td>
                        <input name="amount" type="number" onChange={handleInputChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="type">Choose question Type</label>
                    </td>
                    <td>
                        <select name="type" type="text" onChange={handleInputChange}>
                            <option value="multiple">MCQ</option>
                            <option value="boolean">True/False</option>
                        </select>
                        
                    </td>
                </tr>
            </table>
            <div className="CustomQuiz_Submit">
                <button type="submit" onClick={handleSubmit}>Lets Begin</button>
            </div>
          
        </div>


   </div>
  )
}

export default CustomQuiz
