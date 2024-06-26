import axios from 'axios';

const QuetionObjectCreator = async (URL) => {
    try {
        const response = await axios.get(URL);
     
        if (response.status !== 200) {
            throw new Error("Invalid");
        }
        
        const questions = response.data.results;
        const responseCode = response.data.response_code;
        return { responseCode, questions };
    } catch (error) {
        console.error("Error fetching questions:", error);
        return { responseCode: 0, questions: [] }; // Default values in case of error
    }
};

export default QuetionObjectCreator;