import { fetchUserData } from "./Fetcher";

//For Login Verification
export async function handleLoginSubmit(checkData, setUserStatus, navigate, url) {
    try {
        const result = await fetchUserData(url);
        console.log(result);
        const userData = result.find(
            user =>
                user.userName === checkData.identifier || user.email === checkData.identifier
        );

        if (userData) {
            if (userData.password === checkData.password) {
                setUserStatus({
                    userId: userData.userId,
                    scoreId: userData.scoreId,
                    status: true
                });
                navigate("/home");

            } else {
                alert("Hey, we think you forgot your password!");
            }
        } else {
            alert("Hey, you are not in our romantic dictionaries. Kindly register ;)");
        }
    } catch (err) {
        console.error("User registration failed:", err.message);
        alert("User registration failed");
    }
}