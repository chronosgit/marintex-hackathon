import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

    const links = [
        "About", "Help", 
        "Privacy", "Content Guide", 
        "Advertisement", "Contact"
    ];

    return (
        <Box
            sx={{
                py: "5rem",
                display: "grid",
                gridTemplateColumns: "1",
                justifyContent: "center",
                placeItems: "center",
                gap: "2rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    color: blue[600],
                }}
            >
                <FacebookRoundedIcon />
                
                <XIcon />

                <InstagramIcon />

                <YouTubeIcon />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: "1rem",
                }}
            >
            {
                links.map((link, i) => 
                    <Typography
                        key={i}
                        sx={{
                            opacity: 0.7,
                            fontSize: "1rem",
                        }}
                    >
                        {link}
                    </Typography>
                )
            }
            </Box>

            <Typography
                sx={{
                    opacity: 0.7,
                    fontSize: "1rem",
                }}
            >
                Copyright &copy; EnergySaverPost
            </Typography>
        </Box>
    )
};

export default Footer;