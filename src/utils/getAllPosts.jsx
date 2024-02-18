import baseUrl from "src/db/baseUrl";
import axios from "axios";
import refreshToken from "./refreshToken";

const getAllPosts = async () => {
    const username = localStorage.getItem("username");

    const res = await refreshToken(username)
    .then(async () => {
        const token = localStorage.getItem("access-token");
        
        const res = await axios.get(
            `${baseUrl}/api/v1/posts/all`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        )
        .then(response => response.data)
        .catch(error => {
            console.error(error);
        });

        return res;
    })
    .catch(error => {
        console.error(error);
    });

    return res;
};

export default getAllPosts;