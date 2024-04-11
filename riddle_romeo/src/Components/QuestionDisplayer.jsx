import "../Assets/CSS/QuestionDisplayer.css"
import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';

const QuestionDisplayer = (props) => {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [optionClicked, setOptionClicked] = useState(false); 

    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.questions) {
            const updatedQuestions = location.state.questions.map(question => {
                const allOptions = [...question.incorrect_answers, question.correct_answer];
                const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
                return {
                    ...question,
                    options: shuffledOptions,
                };
            });
            setQuestions(updatedQuestions);
        }
    }, [location.state]);

    const handleClick = async (event, option) => {
        if (!optionClicked) { // Check if option has been clicked before
          const currentAnswer = option;
          const correctAnswer = questions[index].correct_answer.toLowerCase();
      
          if (currentAnswer.toLowerCase() === correctAnswer) {
            event.target.style.backgroundColor = 'green';
          } else {
            event.target.style.backgroundColor = 'red';
          
            const correctIndex = questions[index].options.findIndex(opt => opt.toLowerCase() === correctAnswer);
         
            const correctOptionElement = event.target.parentNode.childNodes[correctIndex];
          
            correctOptionElement.style.backgroundColor = 'green';
          }
          event.target.style.color = 'white';
          setOptionClicked(true); 
      
          await sleep(2000);
      
          if (event.target.style.backgroundColor === 'red') {
              const correctAnswerIndex = questions[index].options.findIndex(opt => opt.toLowerCase() === correctAnswer);
              const correctOptionElement = event.target.parentNode.childNodes[correctAnswerIndex];
              correctOptionElement.style.backgroundColor = 'white';
            }
            event.target.style.backgroundColor = 'white';
            event.target.style.color = 'black';
          setIndex(prev => prev + 1);
          setOptionClicked(false); 
        }
      };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='QuestionDisplayer_Main'>
            <div className='QuestionDisplayer_Head'>
                {questions[index].category}
            </div>
            <div className='QuestionDisplayer_Body'>
                <div className='QuestionDisplayer_Question'>
                    {questions[index].question}
                </div>

                <div className='QuestionDisplayer_Option_Body'>
                    <ul className='QuestionDisplayer_Option_Ul'>
                        {questions[index].options.map((option, ind) => (
                            <li key={ind} value={option} className='QuestionDisplayer_Option' onClick={(event) => handleClick(event, option)}>{option}</li>
                        ))}
                    </ul>
                </div>
                <div className='QuestionDisplayer_Button'>
                    <button onClick={() => setIndex(prev => prev + 1)} id="next">Next</button>
                </div>
            </div>
        </div>
    );
};

export default QuestionDisplayer;
