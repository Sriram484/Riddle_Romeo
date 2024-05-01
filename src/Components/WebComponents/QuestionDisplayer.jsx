import "../../Assets/CSS/QuestionDisplayer.css"
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import bull from "../../Assets/Images/bullseye.png"
import bulltarget from "../../Assets/Images/redBull.png"

const QuestionDisplayer = () => {

    const navigate = useNavigate();
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);
    const [activeIndex, setActiveIndex] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [optionClicked, setOptionClicked] = useState({});

    const [quizStats, setQuizStats] = useState({
        score: 0,
        totalQuestions: 0,
        questionType: '',
        difficulty: ''
    });


    //Timer
    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    navigate('/Score', { state: { quizStats } });
                } else {
                    setMinutes(prevMinutes => prevMinutes - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds(prevSeconds => prevSeconds - 1);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [minutes, seconds]);
    const formattedTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;


    //ScrollBar
    useEffect(() => {
        function showScrollbar() {
            const container = document.querySelector('.QuestionNumberContainer');
            if (container) {
                container.classList.remove('scrollbar-hide');
            }
        }
        const container = document.querySelector('.QuestionNumberContainer');
        if (container) {
            container.addEventListener('scroll', showScrollbar);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', showScrollbar);
            }
        };
    }, []);


    //Getting the data
    const location = useLocation();
    const decodeHTML = (text) => {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    };

    useEffect(() => {
        if (location.state && location.state.questions) {
            const updatedQuestions = location.state.questions.map(question => {
                const decodedQuestion = {
                    ...question,
                    question: decodeHTML(question.question), // Decode the question text
                    options: question.incorrect_answers.concat(question.correct_answer) // Concatenate incorrect and correct answers
                        .sort(() => Math.random() - 0.5) // Shuffle the options
                        .map(option => ({
                            text: decodeHTML(option),
                            correct: option === question.correct_answer // Add a flag indicating if the option is correct
                        }))
                };
                return decodedQuestion;
            },[location.state]);
            setQuestions(updatedQuestions);
        }

        setQuizStats(prevStats => ({
            score: 0,
            totalQuestions: location.state.questions.length,
            questionType: location.state.questions[0].type,
            difficulty: location.state.questions[0].difficulty
        }));
    }, [location.state]);


    //Display the current index
    const handleIndex = (index) => {
        setIndex(index);
    }

    //Options CSS to add BullEye
    const handleClick = async (event, option, index) => {
        console.log(location.state);
        const optionId = `Question${index}Value${option}`;
        const isCorrect = (option === questions[index].correct_answer);
        const isOptionAlreadyCorrect = optionClicked[optionId];

        const isAnyOptionClicked = Object.keys(optionClicked).some(key => key.startsWith(`Question${index}Value`) && optionClicked[key]);

        if (isAnyOptionClicked) {
            const prevOptionId = Object.keys(optionClicked).find(key => key.startsWith(`Question${index}Value`) && optionClicked[key]);
            setOptionClicked(prevState => ({
                ...prevState,
                [prevOptionId]: false
            }));
        }

        setOptionClicked(prevState => ({
            ...prevState,
            [optionId]: true
        }));
        const updatedActiveIndex = [...activeIndex, index];
        setActiveIndex(updatedActiveIndex);

        const prevOptionId = Object.keys(optionClicked).find(key => key.startsWith(`Question${index}Value`) && optionClicked[key]);
        const prevOptionCorrect = prevOptionId && prevOptionId === `Question${index}Value${questions[index].correct_answer}`;

        if (!isOptionAlreadyCorrect) {
            setQuizStats(prevStats => ({
                ...prevStats,
                score: isCorrect ? prevStats.score + (prevOptionCorrect ? 0 : 1) : prevStats.score - (prevOptionCorrect ? 1 : 0) // Increment or decrement score based on correctness of the current and previous selections
            }));
        }

    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    const handleSubmit = () => {
        navigate('/Score', { state: { quizStats } });
    }
    return (
        <div className="QuestionDisplayerSuperContainer">
            <div className="QuestionDisplayerHeader">
                <div className='QuestionDisplayer_Head'>
                    Theme : {questions[index].category}
                </div>
                <div className="RightSideQuestionDisplayer">
                    <div className={`QuestionDisplayerTimer ${minutes < 2 ? 'timer-red' : ''}`}>
                        {formattedTime}
                    </div>
                    <div className="QuestionDisplayerSubmitButtonContainer">
                        <button onClick={(e) => handleSubmit(e)} id = "end">End</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="QuestionDisplayer_Container">
                    <div className="QuestionNumberDisplayer">
                        <div>
                            {questions.map((question, index) => (
                                <div key={index}
                                    className={`QuestionNumberBlock ${activeIndex.includes(index) ? 'Numberactive' : ''}`}
                                    onClick={() => handleIndex(index)}
                                >{index + 1}</div>
                            ))}
                        </div>
                    </div>
                    <div className='QuestionDisplayer_Question'>
                        {questions[index].question}
                    </div>
                    <div className='QuestionDisplayer_Main'>
                        <div className='QuestionDisplayer_Body'>

                            <div className='QuestionDisplayer_Option_Body'>
                                <ul className='QuestionDisplayer_Option_Ul'>
                                    {questions[index].options.map((option, ind) => (
                                        <li key={ind} value={index} className='QuestionDisplayer_Option' onClick={(event) => handleClick(event, option.text, index)}>
                                            <div className="QuestionDisplayer_Option_Icon">
                                                <img src={optionClicked[`Question${index}Value${option.text}`] ? bulltarget : bull} id={`Question${index}Value${option.text}`} />
                                            </div>
                                            <span className={option.correct ? 'correct-option' : ''}>{option.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="QuestionDisplayer_ButtonContainer">
                                <div className='QuestionDisplayer_Button'>
                                    <button
                                        onClick={() => {
                                            setIndex(prev => prev - 1);

                                        }}
                                        id="prev"
                                        disabled={index === 0} // Disable when index is 0
                                    >
                                        Prev
                                    </button>
                                </div>
                                <div className='QuestionDisplayer_Button'>
                                    <button
                                        onClick={() => {
                                            if (index === questions.length - 1) {
                                                handleSubmit(); // Call handleSubmit when reaching the last question
                                            } else {
                                                setIndex(prev => prev + 1); // Move to the next question if not the last one
                                            }
                                        }}
                                        id={index === questions.length - 1 ? 'end' : 'next'}
                                    >
                                        {index === questions.length - 1 ? 'End' : 'Next'} {/* Change button text based on index */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionDisplayer;
