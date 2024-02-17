import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const HeaderAuth = () => {

    return (
        <Box
            sx={{
                display: "flex",
                gap: "0.5rem",
            }}
        >
            <Button
                href="/login" 
                sx={{
                    textTransform: "none",
                }}
            >
                Log in
            </Button>

            <Button
                href="/register" 
                sx={{
                    px: "1.5rem",
                    py: "0.5rem",
                    backgroundColor: blue[500],
                    borderRadius: "1.5rem",
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: blue[700],
                    },
                }}
            >
                <Typography color="white">Join us</Typography>
            </Button>
        </Box>
    )
};

export default HeaderAuth;