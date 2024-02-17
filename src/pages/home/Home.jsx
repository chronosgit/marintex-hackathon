import { Container } from "@mui/material";
import Header from "src/components/layout/header/Header";

const Home = () => {

    return (
        <Container 
            maxWidth="lg"
            sx={{
                py: "1rem"
            }}
        >
            <Header />

        </Container>
    )
};

export default Home;