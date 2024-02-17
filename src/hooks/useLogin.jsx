import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from "src/db/baseUrl";
import validatePwd from "src/utils/validatePwd";
import validateUsername from "src/utils/validateUsername";

const useLogin = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const validate = () => {
        validateUsername(username);
        validatePwd(pwd);
    }
    
    const emptyStates = () => {
        setUsername("");
        setPwd("");
    }

    const login = async (username, pwd, finallyCallback = () => {}, errorCallback = () => {}) => {
        validate();

        await axios.post(
            `${baseUrl}/api/v1/auth/login`,
            {
                username: username,
                password: pwd,
            },
            {
                headers: {
                    "Content-Type": "application/json" // ; charset=UTF-8    
                },
            },
        )
        .then(response => {
            finallyCallback();

            localStorage.setItem("username", username);
            localStorage.setItem("access-token", response.data.accessToken);
            localStorage.setItem("refresh-token", response.data.refreshToken)

            navigate("/");
        })
        .catch(error => {
            finallyCallback();
            errorCallback();

            console.error(error);

            throw error;
        });
    }

    return {username, pwd, setUsername, setPwd, validate, emptyStates, login};
};

export default useLogin;