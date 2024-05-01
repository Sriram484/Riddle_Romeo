import axios from 'axios';

export async function updateScore(userStatus, quizStats) {
    try {
        const scoreResponse = await axios.get(`https://riddle-romeo-login-api-8.onrender.com/api/v1/score/search/${userStatus.scoreId}`);
        console.log(scoreResponse);
        console.log(quizStats);
        console.log(userStatus.scoreId);
        let mul = 1;
        if (quizStats.difficulty === "easy") {
            mul = 1;
        } else if (quizStats.difficulty === "medium") {
            mul = 2;
        } else {
            mul = 3;
        }
        const newOverallScore = scoreResponse.data.overAllScore + mul * quizStats.score;
        await axios.put(`https://riddle-romeo-login-api-8.onrender.com/api/v1/score/edit/${userStatus.scoreId}`, {
            userId: userStatus.userId,
            overAllScore: newOverallScore
        });
    } catch (error) {
        console.error("Error updating score:", error);
    }
}
