import { Link as ReactRouterLink } from "react-router-dom";
import { 
    Button, FormControl, 
    TextField, Typography,
    Link as MUILink,
    Box,
    Alert
} from "@mui/material";
import { blue } from "@mui/material/colors";
import useLogin from "src/hooks/useLogin";
import { useState } from "react";

const FormLogin = () => {

    const [error, setError] = useState(false);

    const {
        username, pwd, 
        setUsername, setPwd, 
        validate, emptyStates
    } = useLogin();

    const onSubmit = () => {
        try {
            validate();

            
        } catch(error) {
            emptyStates();

            setError(true);
            console.error(error);
        }
    }

    return (
        <FormControl
            component="form"
            sx={{
                textAlign: "center",
            }}
        >
            <TextField 
                required
                size="small"
                id="email" 
                label="Username"
                margin="dense"   
                name={username}
                value={username} 
                onChange={(e) => {
                    setUsername(e.target.value);
                    setError(false);
                }}
            />

            <TextField 
                required
                size="small"
                id="email" 
                label="Password"
                margin="dense"   
                name={pwd}
                value={pwd} 
                onChange={(e) => {
                    setPwd(e.target.value);
                    setError(false);
                }}
            />

            {
            error &&
                <Alert 
                    severity="error"
                    sx={{
                        my: "1rem",
                        fontSize: "0.9rem",
                        textAlign: "left",
                    }}
                >
                    <Box 
                        sx={{
                            marginBottom: "0.5rem",
                            lineHeight: "1rem",
                        }}
                    >
                        Username must be from 8 to 15 characters
                    </Box>
                
                        
                    <Box 
                        sx={{
                            marginBottom: "0.5rem",
                            lineHeight: "1rem",
                        }}
                    >
                        Password must be from 8 to 30 characters
                    </Box>
                </Alert>
            }

            <Button
                variant="contained"
                sx={{
                    my: "1rem",
                }}
                onClick={onSubmit}
            >
                Continue
            </Button>

            <Typography 
                sx={{
                    marginTop: "2rem",
                    marginBottom: "0.5rem",
                    opacity: "0.8",
                }}
            >
                Don&apos;t have an account?
            </Typography>

            <MUILink
                component={ReactRouterLink}
                href="/register"
                underline="none"
            >
                <Box sx={{color: blue[500]}}>Register</Box>
            </MUILink>
        </FormControl>
    )
};

export default FormLogin;