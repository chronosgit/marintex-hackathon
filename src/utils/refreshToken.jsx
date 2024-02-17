import axios from "axios";
import baseUrl from "src/db/baseUrl";

const refreshToken = async (username) => {
    const token = localStorage.getItem("refreshToken");

    const refresh = await axios.post(
        `${baseUrl}/api/v1/auth/refreshToken`, 
        {
            username: username,
            token: token
        },
    )
    .then(response => {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
    })
    .catch(error => {
        console.error(error);
    });

    return refresh;
};

export default refreshToken;