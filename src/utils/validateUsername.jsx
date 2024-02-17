const validateUsername = (username) => {
    if(username.length < 8 || username.length > 15) {
        throw new Error("Username must be from 8 to 15 characters");
    }
};

export default validateUsername;