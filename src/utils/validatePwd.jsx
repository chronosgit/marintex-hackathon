const validatePwd = (pwd) => {
    if(pwd.length < 8 || pwd.length > 30) {
        throw new Error("Password must be from 8 to 30 characters");
    }
};

export default validatePwd;