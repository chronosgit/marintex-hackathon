import { useState } from "react";
import validatePwd from "src/utils/validatePwd";
import validateUsername from "src/utils/validateUsername";
import areStringsEqual from "src/utils/areStringsEqual";

const useRegister = () => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [rePwd, setRePwd] = useState("");

    const validate = () => {
        if(!validateUsername(username)) {
            throw new Error("Username must be ...");
        }

        if(!areStringsEqual(pwd, rePwd)) {
            throw new Error("Passwords must be equal");
        }

        if(!validatePwd(pwd) || !validatePwd(rePwd)) {
            throw new Error("Password must be ...");
        }

        console.log('success');
    }
    
    const emptyStates = () => {
        setUsername("");
        setPwd("");
        setRePwd("");
    }

    return {username, pwd, rePwd, setUsername, setPwd, setRePwd, validate, emptyStates};
};

export default useRegister;