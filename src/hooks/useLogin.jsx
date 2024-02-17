import { useState } from "react";
import validatePwd from "src/utils/validatePwd";
import validateUsername from "src/utils/validateUsername";

const useLogin = () => {
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

    const login = (username, pwd, finallyCallback) => {
        console.log(username, pwd, finallyCallback);


    }

    return {username, pwd, setUsername, setPwd, validate, emptyStates, login};
};

export default useLogin;