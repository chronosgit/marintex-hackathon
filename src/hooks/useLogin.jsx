import { useState } from "react";
import validatePwd from "src/utils/validatePwd";
import validateUsername from "src/utils/validateUsername";

const useLogin = () => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const validate = () => {
        if(!validateUsername(username)) {
            throw new Error("Username must be ...");
        }

        if(!validatePwd(pwd)) {
            throw new Error("Password must be ...");
        }

        console.log('success');
    }
    
    const emptyStates = () => {
        setUsername("");
        setPwd("");
    }

    return {username, pwd, setUsername, setPwd, validate, emptyStates};
};

export default useLogin;