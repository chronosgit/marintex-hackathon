import { Container } from "@mui/material";
import AuthBox from "src/components/layout/auth-box/AuthBox";
import FormLogin from "src/components/layout/form-login/FormLogin";

const Register = () => {

    return (
        <Container 
            maxWidth="xs"
            sx={{
                py: "3rem",
            }}
        >
            <AuthBox form={<FormLogin />} />
        </Container>
    )
};

export default Register;