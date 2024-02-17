import { useState } from "react";
import validatePwd from "src/utils/validatePwd";
import validateUsername from "src/utils/validateUsername";
import areStringsEqual from "src/utils/areStringsEqual";
import refreshTokens from "src/utils/refreshToken";

const useRegister = () => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [rePwd, setRePwd] = useState("");

    const validate = () => {
        validateUsername(username);

        if(!areStringsEqual(pwd, rePwd)) {
            throw new Error("Passwords must be equal");
        }

        validatePwd(pwd);
        validatePwd(rePwd);
    }

    const register = async (username, pwd) => {
        const refresh = refreshTokens();
    
        try {
            refresh
            .then(response => {
                console.log(response);
            })
        } catch(error) {
            console.error(error);
        }
    };
    
    const emptyStates = () => {
        setUsername("");
        setPwd("");
        setRePwd("");
    }

    return {
        username, pwd, 
        rePwd, setUsername, 
        setPwd, setRePwd, 
        validate, emptyStates,
        register,
    };
};

export default useRegister;