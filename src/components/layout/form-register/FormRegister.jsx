import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { 
    Button, FormControl, 
    TextField, Typography,
    Link as MUILink,
    Box,
    Alert
} from "@mui/material";
import { blue } from "@mui/material/colors";
import useRegister from "src/hooks/useRegister";

const FormRegister = () => {

    const [error, setError] = useState(false);

    const {
        username, pwd, 
        rePwd, setUsername, 
        setPwd, setRePwd, 
        validate, emptyStates,
        register
    } = useRegister();

    const onSubmit = () => {
        try {
            validate();

            register(username, pwd);
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
                label="Password"
                type="password"
                margin="dense"   
                name={pwd}
                value={pwd} 
                onChange={(e) => {
                    setPwd(e.target.value);
                    setError(false);
                }} 
            />

            <TextField
                required
                size="small"
                label="Repeat password"
                type="password"
                margin="dense"   
                name={rePwd}
                value={rePwd} 
                onChange={(e) => {
                    setRePwd(e.target.value);
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

                    <Box>Passwords must be equal</Box>
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
                Already have an account?
            </Typography>

            <MUILink
                component={ReactRouterLink}
                href="/login"
                underline="none"
            >
                <Box sx={{color: blue[500]}}>Log in</Box>
            </MUILink>
        </FormControl>
    )
};

export default FormRegister;