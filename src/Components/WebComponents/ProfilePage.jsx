import React, { useContext, useEffect, useState } from "react";
import "../../Assets/CSS/ProfilePage.css";
import { UserStatusContext } from '../useContextComponent/UserStatusProvider';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { convertToBase64, getUserData, updateUserData } from "../Functions/ProfilePage";


const ProfilePage = () => {
    const navigate = useNavigate();
    const { userStatus } = useContext(UserStatusContext);
    const [sections, setSections] = useState({
        profile: true,
        password: false,
        info: false
    });

    const [imageUserData, setImageUserData] = useState({
        image: ""
    });

    const [fileInputDisabled, setFileInputDisabled] = useState(true);

    //PreFetch the data of the user
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserData(userStatus.userId); // Fetch user data using getUserData function

                // Update generalUserData state
                setGeneralUserData({
                    username: userData.userName,
                    name: userData.name,
                    email: userData.email
                });

                // Update infoUserData state
                setInfoUserData({
                    birthday: userData.birthDay,
                    country: userData.country,
                    phone: userData.phone,
                    email: userData.email
                });

                // Update imageUserData state if image exists
                if (userData.image) {
                    setImageUserData({ image: userData.image });
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [userStatus.userId]);

    const toggleSection = (section) => {
        setSections(prevState => {
            const newState = {
                profile: false,
                password: false,
                info: false
            };

            newState[section] = true;

            return newState;
        });

    };

    const [generalUserData, setGeneralUserData] = useState({
        username: "",
        name: "",
        email: ""
    });

    const [passwordUserData, setPasswordUserData] = useState({
        currentPassword: "",
        newPassword: "",
        repeatPassword: ""
    });

    const [infoUserData, setInfoUserData] = useState({
        birthday: "",
        country: "",
        phone: "",
        email: ""
    });

    const handleChangeGeneralData = (e) => {
        const { name, value } = e.target;

        setGeneralUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));



    };
    const handleChangePasswordData = async (e) => {
        const { name, value } = e.target;
        setPasswordUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleChangeInfoData = (e) => {

        const { name, value } = e.target;
        setInfoUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));


    };


    const handleGeneralSubmit = async (e) => {
        e.preventDefault();

        try {
            // Fetch user data
            const currentData = await getUserData(userStatus.userId);

            // Create updated data object
            const newData = {
                ...currentData,
                userName: generalUserData.username,
                name: generalUserData.name,
                email: generalUserData.email
            };

            // Update user data

            await updateUserData(userStatus.userId, newData);

            alert("Data updated successfully");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        try {
            // Fetch user data
            const currentData = await getUserData(userStatus.userId);

            if (currentData.password !== passwordUserData.currentPassword) {
                alert("The password u entered is wrong");
                return;
            }
            if (passwordUserData.newPassword !== passwordUserData.repeatPassword) {
                alert("The new password and repeated password do not match");
                return;
            }
            if (passwordUserData.newPassword.length == 0) {
                alert("The new password and repeated password do not be empty");
                return;

            }
            else {
                // Create updated data object
                const newData = {
                    ...currentData,
                    password: passwordUserData.newPassword
                };

                // Update user data
                await updateUserData(userStatus.userId, newData);

                alert("Data updated successfully");
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInfoSubmit = async (e) => {
        e.preventDefault();

        try {
            // Fetch user data
            const currentData = await getUserData(userStatus.userId);

            // Create updated data object
            const newData = {
                ...currentData,
                birthDay: infoUserData.birthday,
                country: infoUserData.country,
                phone: infoUserData.phone,
                email: infoUserData.email
            };

            // Update user data

            await updateUserData(userStatus.userId, newData);
            alert("Data updated successfully");

        }
        catch (error) {
            console.error('Error handling info submit:', error);
        }


    }

    return (
        <div className="profile_MainBody">
            <div class="profile_container">
                <h4 class="profile_heading">Account settings</h4>
                <div class="profile_card">
                    <div className="profile_sidebar">
                        <a className={sections.profile ? "profile_sidebarLinks activeLink" : "profile_sidebarLinks"} onClick={() => toggleSection('profile')}>
                            General
                        </a>
                        <a className={sections.password ? "profile_sidebarLinks activeLink" : "profile_sidebarLinks"} onClick={() => toggleSection('password')}>
                            Change password
                        </a>
                        <a className={sections.info ? "profile_sidebarLinks activeLink" : "profile_sidebarLinks"} onClick={() => toggleSection('info')}>
                            Info
                        </a>
                        <a className="profile_sidebarLinks" onClick={() => { navigate("/") }}>
                            Back
                        </a>
                    </div>
                    <div className="Profile_TotalBody">
                        <div className={sections.profile ? "Visible" : "Hidden"} class="profile_mainBody" id="account-general">
                            <div class="profile_picContainer">
                                <img src={imageUserData.image} alt
                                    class="profile_pic" />
                                <div class="profile_uploadContainerButtons">
                                    <label class="profile_uploadBtn">
                                        Upload
                                        <input type="file" className="profile_imgInput" onChange={(e) => convertToBase64(e, userStatus, setImageUserData)} />

                                    </label>
                                </div>
                            </div>
                            <div class="profile_formBody">
                                <div className="form-group">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control mb-1"
                                        name="username"
                                        value={generalUserData.username}
                                        onChange={handleChangeGeneralData}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={generalUserData.name}
                                        onChange={handleChangeGeneralData}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">E-mail</label>
                                    <input
                                        type="text"
                                        className="form-control mb-1"
                                        name="email"
                                        value={generalUserData.email}
                                        onChange={handleChangeGeneralData}
                                    />
                                </div>
                                <div className="form-group">
                                    <button onClick={handleGeneralSubmit} className="ScoreSubmitButton">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className={sections.password ? "Visible" : "Hidden"} class="password_mainBody Hidden" id="account-change-password" >
                            <div class="password_subBody">
                                <div className="form-group">
                                    <label className="form-label">Current password</label>
                                    <input type="password" className="form-control" name="currentPassword" onChange={handleChangePasswordData} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">New password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="newPassword"
                                        value={passwordUserData.password}
                                        onChange={handleChangePasswordData}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Repeat new password</label>
                                    <input type="password" className="form-control" name="repeatPassword" onChange={handleChangePasswordData} />
                                </div>
                                <div className="form-group">
                                    <button onClick={handlePasswordSubmit} className="ScoreSubmitButton">Submit</button>
                                </div>
                            </div>
                        </div>

                        <div className={sections.info ? "Visible" : "Hidden"} class="info_mainBody Hidden" id="account-info">
                            <div class="info_subBody">
                                <div className="form-group">
                                    <label className="form-label">Birthday</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="birthday"
                                        value={infoUserData.birthday}
                                        onChange={handleChangeInfoData}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="country"
                                        value={infoUserData.country}
                                        onChange={handleChangeInfoData}
                                    />
                                </div>

                                <p className="mb-4" style={{ fontSize: "28px" }}>Contacts</p>
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={infoUserData.phone}
                                        onChange={handleChangeInfoData}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={infoUserData.email}
                                        onChange={handleChangeInfoData}
                                    />
                                </div>
                                <div className="form-group">
                                    <button onClick={handleInfoSubmit} className="ScoreSubmitButton">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
