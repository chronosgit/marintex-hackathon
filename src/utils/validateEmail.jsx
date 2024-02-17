
const validateEmail = (email) => {
    if(email.length === 0) {
        throw new Error("Email must not be empty");
    }

    const EMAIL_REGEX = /^[A-z]([A-z0-9-_])*@[A-z]([A-z0-9-_])*\.[A-z]([A-z0-9-_])*$/;

    if(!EMAIL_REGEX.test(email)) {
        throw new Error("Email must be in email@service.com");
    }
};

export default validateEmail;