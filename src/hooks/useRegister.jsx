import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validatePwd from "src/utils/validatePwd";
import validateUsername from "src/utils/validateUsername";
import areStringsEqual from "src/utils/areStringsEqual";
import baseUrl from "src/db/baseUrl";
import validateEmail from "src/utils/validateEmail";

const useRegister = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [rePwd, setRePwd] = useState("");

    const validate = () => {
        validateUsername(username);
        validateEmail(email);

        if(!areStringsEqual(pwd, rePwd)) {
            throw new Error("Passwords must be equal");
        }

        validatePwd(pwd);
        validatePwd(rePwd);
    }

    const register = async (username, pwd, email, finallyCallback = () => {}) => {
        validate();

        // await fetch(`${baseUrl}/api/v1/auth/registration`, 
        //     {
        //         method: 'POST',
        //         mode: 'cors',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             "username": username,
        //             "email": email,
        //             "password": pwd
        //         }),
        //     }
        // )
        // .then(response => {
        //     finallyCallback();

        //     console.log(response);

        //     navigate("/login");
        // })
        // .catch(error => {
        //     finallyCallback();

        //     console.error(error);

        //     throw error;
        // });

        await axios.post(
            `${baseUrl}/api/v1/auth/registration`,
            {
                username: username,
                password: pwd,
                email: email,
            },
            {
                headers: {
                    "Content-Type": "application/json" // ; charset=UTF-8    
                },
            },
        )
        .then(response => {
            finallyCallback();

            console.log(response);

            navigate("/login");
        })
        .catch(error => {
            finallyCallback();

            console.error(error);

            throw error;
        });
    };
    
    const emptyStates = () => {
        setUsername("");
        setPwd("");
        setRePwd("");
        setEmail("");
    }

    return {
        username, pwd, email, 
        rePwd, setUsername, 
        setPwd, setRePwd,
        setEmail, validate, 
        emptyStates, register,
    };
};

export default useRegister;