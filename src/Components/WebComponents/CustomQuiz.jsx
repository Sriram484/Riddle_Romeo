import "../../Assets/CSS/CustomQuiz.css"
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import UrlCreator from "../Functions/UrlCreator";
import QuestionObjectCreator from "../Functions/QuestionObjectCreator";
import Navigation from "./Navigation";
import { fetchCategories } from "../Functions/Fetcher";

const CustomQuiz = ({userStatus}) => {
    
    const navigate = useNavigate();
    const [result,setResult] = useState({
        id:9,
        category:"General Knowledge",
        difficulty:"easy",
        amount:0,
        type:"multiple"

    });
    const [optionArray,setOptionArray] = useState([]);

    //Store the options that we changed
    const handleCategoryChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        setResult(prevState => ({
            ...prevState,
            id: optionArray[selectedIndex].id,
            category: optionArray[selectedIndex].name
        }));
        
    };

    //Store the input such as Difficulty,Number Of Question and type
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setResult(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //Handle the submit fuction
    const handleSubmit = () => {
        if (result.amount <= 0) {
            alert(`Kindly enter the "Number of Questions" greater than 0`);
        } else {
            const URL = UrlCreator(result);
    
            const QuestionsPromise = QuestionObjectCreator(URL);
            
   
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
    }
    
    //Fetch the options
    useEffect(() => {
        const fetchData = async () => {
            //Called from Function file
            const categories = await fetchCategories();
            setOptionArray(categories);
        };

        fetchData();
    }, []);


  return (
    <div>
        <Navigation userStatus={userStatus}/>
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
   </div>
  )
}

export default CustomQuiz
