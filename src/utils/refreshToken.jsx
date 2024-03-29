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
    .then(response => {
        localStorage.setItem("access-token", response.data.accessToken);
        localStorage.setItem("refresh-token", response.data.refreshToken);
    })
    .catch(error => {
        console.error(error);
    });

    return refresh;
};

export default refreshToken;