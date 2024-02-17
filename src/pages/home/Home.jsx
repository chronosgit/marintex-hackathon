import { Box, Container } from "@mui/material";
import Header from "src/components/layout/header/Header";
import HomeHero from "./home-hero/HomeHero";

const Home = () => {

    return (
        <>
            <Container 
                maxWidth="lg"
                sx={{
                    py: "0.8rem"
                }}
            >
                <Header />
            </Container>

            <Box
                sx={{
                    backgroundColor: "#f5f7fa",
                }}
            >
                <Container maxWidth="lg">
                    <HomeHero />
                </Container>
            </Box>
        </>
    )
};

export default Home;