import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { 
    Button, Checkbox, 
    FormControl, FormControlLabel, 
    TextField, Typography,
    Link as MUILink,
    Box
} from "@mui/material";
import { blue } from "@mui/material/colors";

const FormLogin = () => {

    const [checked, setChecked] = useState(false);

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
            />

            <TextField 
                required
                size="small"
                id="email" 
                label="Password"
                margin="dense"   
            />

            <Button
                variant="contained"
                sx={{
                    my: "1rem",
                }}
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