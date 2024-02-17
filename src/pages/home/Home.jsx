import { Box, Container } from "@mui/material";
import Header from "src/components/layout/header/Header";
import HomeHero from "./home-hero/HomeHero";
import HomeFeatures from "./home-features/HomeFeatures";
import Footer from "src/components/layout/footer/Footer";

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

            <Container maxWidth="lg">
                <HomeFeatures />
            </Container>

            <Box
                sx={{
                    backgroundColor: "#f5f7fa",
                }}
            >
                <Container maxWidth="lg">
                    <Footer />
                </Container>
            </Box>
        </>
    )
};

export default Home;