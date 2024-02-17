import { Box, Typography } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HomeFeatureCard from "../home-feature-card/HomeFeatureCard";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { blue } from "@mui/material/colors";

const HomeFeatures = () => {

    const cards = [
        {
            title: "Community support",
            descr: `Our application provides 
                ability to share and receive other 
                specialists' experience`,
            icon: <PeopleAltIcon />,
        },
        {
            title: "Data visualisation",
            descr: `You can view all the information 
                and metrics about your ship's energy use, 
                along with tested solutions and advices`,
            icon: <AccessTimeIcon />,
        },
        {
            title: "Advices support",
            descr: `Your data is automatically analyzed
                and valuable advices may be provided to you
                as a feedback`,
            icon: <PendingActionsIcon />,
        },
    ];

    return (    
        <Box
            sx={{
                py: "8rem",
                textAlign: "center",
            }}
        >
            <Typography
                sx={{
                    fontSize: "2rem",
                    marginBottom: "4rem",
                }}
            >
                <span style={{color: blue[400]}}>Manage</span> your energy use efficiently
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "5rem",
                }}
            >
                {
                cards.map((card, i) => 
                    <HomeFeatureCard key={i} card={card} />
                )
                }
            </Box>
        </Box>
    )
};

export default HomeFeatures;