import axios from "axios";
import refreshToken from "./refreshToken";
import baseUrl from "src/db/baseUrl";

const createPost = async (
    title = "Title", start, finish,
    amountFuel = 0, descr = "Description",
    status, isPublic = true,
    finallyCallback = () => {},
    successCallback = () => {}
) => {
    const username = localStorage.getItem("username");

    if(!start) {
        start = new Date();
    }
    if(!finish) {
        finish = new Date(new Date().setDate(start.getDate() + 30));
    }

    const res = await refreshToken(username)
    .then(async () => {
        const token = localStorage.getItem("access-token");

        const res = await axios.post(
            `${baseUrl}/api/v1/posts/create`,
            {
                title: title,
                start: start,
                finish: finish,
                amountFuel: amountFuel,
                descr: descr,
                status: status,
                isPublic: isPublic,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        )
        .then(response => {
            finallyCallback();
            successCallback();

            return response;
        })
        .catch(error => {
            finallyCallback();
            console.error(error);
        });

        return res;
    })
    .catch(error => {
        console.error(error);
    });

    return res;
};

export default createPost;