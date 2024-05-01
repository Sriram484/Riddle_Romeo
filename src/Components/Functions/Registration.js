import axios from 'axios';

export async function handleRegistration(userData, setUserData, navigate) {
    try {
        const responseUser = await axios.post("https://riddle-romeo-login-api-8.onrender.com/api/v1/userData/save", {
            userName: userData.user_name,
            scoreId: "",
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: "",
            phone: "",
            country: "",
            birthDay: ""
        });

        const currentUserId = responseUser.data;

        const responseScore = await axios.post("https://riddle-romeo-login-api-8.onrender.com/api/v1/score/save", {
            userId: currentUserId,
            overAllScore: 0,
            weeklyScore: 0,
            eventScore: 0,
            rank: 0
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
    } catch (err) {
        console.error("User registration failed:", err);
        alert("User registration failed");
    }
}
