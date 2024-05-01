import axios from "axios";

export const getResultArray = async () => {
  try {

    const userDataPromise = axios.get("https://riddle-romeo-login-api-8.onrender.com/api/v1/userData/getall");

    const scorePromise = axios.get("https://riddle-romeo-login-api-8.onrender.com/api/v1/score/getall");

    const [userDataResponse, scoreResponse] = await Promise.all([userDataPromise, scorePromise]);
  
    const resultArray = userDataResponse.data.map(user => {
     
      const userScore = scoreResponse.data.find(score => score.userId === user.userId);
    
      return {
        name: user.name,
        image: user.image,
        score: userScore ? userScore.overAllScore : 0,
        country:user.country
      };
    });

    resultArray.sort((a, b) => {
      if (b.score !== a.score) {
          return b.score - a.score; // Sort by score
      } else {
          // Check if either name is null
          if (a.name === null || b.name === null) {
              // If one of the names is null, prioritize the other
              return a.name === null ? 1 : -1;
          } else {
              return a.name.localeCompare(b.name); // If scores are equal, sort by name
          }
      }
    });
  
    // Return only the top 10 results
    return resultArray.slice(0, 10);

  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
