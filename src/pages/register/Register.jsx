import { Container } from "@mui/material";
import AuthBox from "src/components/layout/auth-box/AuthBox";
import FormRegister from "src/components/layout/form-register/FormRegister";

const Register = () => {

    return (
        <Container 
            maxWidth="xs"
            sx={{
                py: "3rem",
            }}
        >
            <AuthBox form={<FormRegister />} />
        </Container>
    )
};

export default Register;