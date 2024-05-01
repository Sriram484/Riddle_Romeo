const UrlCreator = (result) => {
    try {
        if (!result) {
            throw new Error("Result object is null or undefined");
        }

        const { amount, id, difficulty, type } = result;

        if (!amount || !id || !difficulty || !type) {
            throw new Error("One or more fields in the result object are missing");
        }

        const URL = `https://opentdb.com/api.php?amount=${amount}&category=${id}&difficulty=${difficulty}&type=${type}`;
        return URL;
    } catch (error) {
        console.error("Error creating URL:", error);
        return null;
    }
};

export default UrlCreator;
