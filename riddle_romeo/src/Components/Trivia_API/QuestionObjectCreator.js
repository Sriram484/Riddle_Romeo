import axios from 'axios';

const QuetionObjectCreator = async (URL) => {
    try {
        const response = await axios.get(URL);
        console.log(response);
        if (response.status !== 200) {
            throw new Error("Invalid");
        }
        
        const questions = response.data.results;
        console.log(response);
        // const questions = response.data.results.map(item => {
        //     return {
        //         type: item.type,
        //         category: item.category,
        //         question: item.question,
        //         correctAnswer: item.correct_answer,
        //         inCorrectAnswer: item.incorrect_answers,
        //         options: [...item.incorrect_answers, item.correct_answer]
        //     };
        // });

        return questions;
    } catch (error) {
        console.error("Error fetching questions:", error);
        return []; // Return an empty array in case of an error
    }
};

export default QuetionObjectCreator;
