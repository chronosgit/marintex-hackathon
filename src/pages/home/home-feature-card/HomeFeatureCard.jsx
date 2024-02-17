import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const HomeFeatureCard = ({card}) => {

    const {title, descr, icon} = card;

    return (
        <Box
            sx={{
                textAlign: "center",
            }}
        >   
            <Box 
                sx={{
                    marginBottom: "1rem",
                    color: blue[400],
                }}
            >
                {icon}
            </Box>
            
            <Typography
                sx={{
                    marginBottom: "0.5rem",
                    fontSize: "1.5rem",
                    fontWeight: "900",
                }}
            >
                {title}
            </Typography>

            <Typography
                sx={{
                    
                }}
            >
                {descr}
            </Typography>
        </Box>
    )
};

export default HomeFeatureCard;