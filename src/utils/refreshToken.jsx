import axios from "axios";
import baseUrl from "src/db/baseUrl";

const refreshTokens = async () => {
    const refresh = await axios.get(`${baseUrl}/todos/1`, 
        {
            withCredentials: true,
            credentials: "include",
        }
    );

    return refresh;
};

export default refreshTokens;