import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import heroStats from "src/assets/images/home/heroStats.png";

const HomeHero = () => {

    return (
        <Box
            sx={{
                py: "10rem",
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr",
                alignItems: "center",
                gap: "5rem",
            }}
        >
            <Box>
                <Typography
                    component="h2"
                    sx={{
                        fontSize: "3.5rem"
                    }}
                >
                    <span style={{color: blue[400]}}>Optimize</span> energy use
                </Typography>

                <Typography
                    component="h2"
                    sx={{
                        fontSize: "1.3rem",
                        marginBottom: "2rem",
                    }}
                >
                    Analyze data, make decisions, share your experience
                </Typography>

                <Typography sx={{marginBottom: "2rem"}}>
                    We bring clarity to complex data sets, 
                    making it easy for users to explore their energy use 
                    in trends, patterns and correlations and share their experience
                </Typography>

                <Button
                    href="/" 
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

            <img
                src={heroStats}
                alt=""     
            />
        </Box>
    )
};

export default HomeHero;