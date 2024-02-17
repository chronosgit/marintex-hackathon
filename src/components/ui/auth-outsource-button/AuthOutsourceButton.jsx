import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const AuthOutsourceButton = ({text, icon}) => {

    return (
        <Box
            sx={{
                p: "0.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                borderStyle: "solid",
                borderColor: "#d7d7d7",
                borderWidth: "1px",
                borderRadius: "0.5rem",
                cursor: "pointer",
                transition: "0.2s ease",
                "&:hover": {
                    backgroundColor: blue[100],
                }
            }}
        >
            {icon}

            <Typography sx={{opacity: "0.8"}}>
                {text}
            </Typography>
        </Box>
    )
};

export default AuthOutsourceButton;