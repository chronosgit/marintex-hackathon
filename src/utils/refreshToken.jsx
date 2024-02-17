import axios from "axios";
import baseUrl from "src/db/baseUrl";

const refreshToken = async (username) => {
    const token = localStorage.getItem("refresh-token");

    const refresh = await axios.post(
        `${baseUrl}/api/v1/auth/refreshToken`, 
        {
            username: username,
            token: token
        },
    )
    .then(response => response)
    .catch(error => {
        console.error(error);
    });

    return refresh;
};

export default refreshToken;