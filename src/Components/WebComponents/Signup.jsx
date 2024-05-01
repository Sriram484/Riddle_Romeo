import React, { useState } from 'react';
import "../../Assets/CSS/Signup.css";
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react"
import Cupid from "../../Assets/Images/Lottie/Cupid.json"
import { handleRegistration } from '../Functions/Registration';


const Signup = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        user_name: "",
        name: "",
        email: "",
        password: ""
    });

    //Hande th input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //Store the data in MongoDB
    const handleSubmit = async (e) => {
        e.preventDefault();
        //Registration Function
        await handleRegistration(userData, setUserData, navigate);
    };

    //Navigate to Login Page
    const handleNavigateToLogin = () => {
        navigate("/log");
    };

    return (
        <div className="SignupBody">
            <Lottie animationData={Cupid} className="login1_lottie_animation" />
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
            <Lottie animationData={Cupid} className="login2_lottie_animation" />
        </div>
    );
};

export default Signup;
