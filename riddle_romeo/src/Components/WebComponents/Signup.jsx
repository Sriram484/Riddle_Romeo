import React, { useState} from 'react';
import axios from 'axios';
import "../../Assets/CSS/Signup.css";
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react"
import Cupid from "../../Assets/Images/Cupid.json"


const Signup = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        user_name: "",
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const  handleSubmit = async(e) => {
        e.preventDefault();
        try
        {
            
        const responseUser = await axios.post("https://riddle-romeo-login-api-8.onrender.com/api/v1/userData/save",
        {
            userName: userData.user_name,
            scoreId:"",
            name: userData.name,
            email: userData.email,
            password:userData.password,
            image:"",
            phone:"",
            country:"",
            birthDay:""

        });
        const currentUserId = responseUser.data;
        const responseScore = await axios.post("https://riddle-romeo-login-api-8.onrender.com/api/v1/score/save",
        {
            userId : currentUserId,
            overAllScore : 0,
            weeklyScore : 0,
            eventScore : 0,
            rank : 0
            
        });
        const currentScoreId = responseScore.data;
        await axios.put(`https://riddle-romeo-login-api-8.onrender.com/api/v1/userData/edit/${currentUserId}`, {
            userName: userData.user_name,
            scoreId: currentScoreId,
            name: userData.name,
            email: userData.email,
            password: userData.password,
            phone: "",
            country: "",
            birthDay: ""
        });
 
        
        
          setUserData(prevState => ({
            user_name: "",
            name: "",
            email: "",
            password: ""
        }));
        navigate("/log");
        }
        
    catch(err)
        {
          alert("User Registation Failed");
        }
    };

    const handleNavigateToLogin = () => {
        navigate("/log");
    };

    return (
        <div className="SignupBody">
            <Lottie animationData={Cupid}  className="login1_lottie_animation"/>
            <form onSubmit={handleSubmit}>
                <div className="SignupheadingsContainer">
                    <h1>Sign Up</h1>
                    <div className="Signupsubheadings">
                        <p> Already registered yet?{" "}
                            <span className="SignupLogIn" onClick={handleNavigateToLogin} >
                                Sign Up
                            </span>
                        </p>
                    </div>
                </div>
                <div className="SignupmainContainer">
                    <label htmlFor="user_name">Your username</label>
                    <input type="text" placeholder="Enter Username" name="user_name" value={userData.user_name} onChange={handleChange} required />
                    <br /><br />
                    <label htmlFor="name">Your name</label>
                    <input type="text" placeholder="Enter Name" name="name" value={userData.name} onChange={handleChange} required />
                    <br /><br />
                    <label htmlFor="email">Your email</label>
                    <input type="text" placeholder="Enter Email" name="email" value={userData.email} onChange={handleChange} required />
                    <br /><br />
                    <label htmlFor="password">Your password</label>
                    <input type="password" placeholder="Enter Password" name="password" value={userData.password} onChange={handleChange} required />
                    <div className="SignupFooter">
                        <button className='SigninButton' type="submit">Create Account</button>
                    </div>
                </div>
            </form>
            <Lottie animationData={Cupid}  className="login2_lottie_animation"/>
        </div>
    );
};

export default Signup;
