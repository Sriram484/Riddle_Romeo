import axios from 'axios';

//For Custom_Quiz
export async function fetchCategories(url) {
    try {
        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error('Invalid');
        }
        return response.data.trivia_categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return []; // Return an empty array in case of error
    }
}

//For SignUp
export async function fetchUserData(url) {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Failed to fetch user data");
    }
}
