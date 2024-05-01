import React, { useContext, useEffect, useState } from "react";
import "../../Assets/CSS/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserStatusContext } from '../useContextComponent/UserStatusProvider';
import Lottie from "lottie-react"
import Cupid from "../../Assets/Images/Cupid.json"
import { handleLoginSubmit } from "../Functions/UserDataValidator";

const LogIn = () => {
    const { userStatus, setUserStatus } = useContext(UserStatusContext);
    const navigate = useNavigate();
    const [checkData, setCheckData] = useState({
        identifier: "",
        password: ""
    });

    //Handle the input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCheckData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLoginSubmit(checkData, setUserStatus, navigate, "https://riddle-romeo-login-api-8.onrender.com/api/v1/userData/getall");
    };

    //Navigate to SignUp Page
    const handleNavigateToLogin = () => {
        navigate("/sig");
    };

    return (
        <div className="LoginBody">
            <Lottie animationData={Cupid}  className="login1_lottie_animation"/>
    
            <form onSubmit={handleSubmit}>
                <div className="LoginheadingsContainer">
                    <h1>Log In</h1>
                    <div className="Loginsubheadings">
                        <p> Not registered yet?{" "}
                            <span className="LoginInSignUp" onClick={handleNavigateToLogin}>
                                Sign Up
                            </span>
                        </p>
                    </div>
                </div>
                <div className="LoginmainContainer">
                    <label htmlFor="name">Your username</label>
                    <input type="text" placeholder="Enter Username Or Email" name="identifier" value={checkData.name} onChange={handleChange} required />
                    <br /><br />
                    <label htmlFor="password">Your password</label>
                    <input type="password" placeholder="Enter Password" name="password" value={checkData.password} onChange={handleChange} required />
                    <div className="LoginFooter">
                        <button className="LoginBtn" type="submit">Login</button>
                    </div>
                </div>
            </form>
            <Lottie animationData={Cupid}  className="login2_lottie_animation"/>
        </div>
    );
};

export default LogIn;
