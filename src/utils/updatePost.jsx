import axios from "axios";
import refreshToken from "./refreshToken";
import baseUrl from "src/db/baseUrl";

const updatePost = async (
    id, title, amountFuel, 
    descr, status,
    start, finish,
    finallyCallback = () => {},
    successCallback = () => {}
) => {
    if(title.length === 0) return;
    if(amountFuel === 0) return;
    if(!descr) return;
    if(!start) return;
    if(!finish) return;

    const username = localStorage.getItem("username");

    const res = await refreshToken(username)
    .then(async () => {
        const token = localStorage.getItem("access-token");

        const res = await axios.patch(
            `${baseUrl}/api/v1/posts/update/${id}`,
            {
                title: title,
                start: start,
                finish: finish,
                amountFuel: amountFuel,
                description: descr,
                status: status,
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

export default updatePost;