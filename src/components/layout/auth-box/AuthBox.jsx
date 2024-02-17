import { Alert, Box, Divider, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import AuthOutsourceButton from "src/components/ui/auth-outsource-button/AuthOutsourceButton";
import Logo from "src/components/ui/logo/Logo";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

const AuthBox = ({form}) => {

    return (
        <Box 
            sx={{
                p: "3rem 0.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "4",
            }}
        >
            <Logo />

            <Typography
                component="h2"
                sx={{
                    my: "1rem",
                    fontSize: "2rem",
                    fontWeight: "600",
                    color: blue[500],
                }}
            >
                EnergySaverPort
            </Typography>

            <Box
                sx={{
                    width: "80%",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "0.5rem",
                }}
            >
                <Alert 
                    severity="warning"
                    sx={{
                        marginBottom: "1rem",
                    }}
                >
                    Remember everything important!
                </Alert>

                <AuthOutsourceButton text="Continue with Google" icon={<GoogleIcon />} />

                <AuthOutsourceButton text="Continue with Apple" icon={<AppleIcon />} />

                <Divider 
                    aria-hidden="true"
                    flexItem 
                    sx={{
                        opacity: "0.6",
                        my: "1rem",
                    }}
                >
                    or
                </Divider>

                {form}
            </Box>
        </Box>
    )
};

export default AuthBox;