import axios from 'axios';


//Convert image to string and store it.
export const  convertToBase64 = async(e,userStatus, setImageUserData) => {
    try {
        const response = await axios.get(`https://riddle-romeo-login-api-8.onrender.com/api/v1/userData/search/${userStatus.userId}`);
        const currentData = response.data;
        const reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = async () => {
            setImageUserData({ image: reader.result });
            const newData = {
                ...currentData,
                image: reader.result
            };

            await axios.put(`https://riddle-romeo-login-api-8.onrender.com/api/v1/userData/edit/${userStatus.userId}`, newData);
            console.log("Data updated successfully");
        };
    } catch (error) {
        console.error('Error:', error);
    }
}


//Fetch and Update the data
export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`https://riddle-romeo-login-api-8.onrender.com/api/v1/userData/search/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

export const updateUserData = async (userId, newData) => {
    try {
        await axios.put(`https://riddle-romeo-login-api-8.onrender.com/api/v1/userData/edit/${userId}`, newData);
        console.log("Data updated successfully");
    } catch (error) {
        console.error('Error updating user data:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};