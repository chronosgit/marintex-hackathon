import { Box } from "@mui/material";
import Logo from "src/components/ui/logo/Logo";
// import HeaderLinks from "src/components/layout/header/header-links/HeaderLinks";
import HeaderAuth from "src/components/layout/header/header-auth/HeaderAuth";

const Header = () => {

    // const links = [
    //     {
    //         name: "Link1",
    //         url: "/",
    //     },
    //     {
    //         name: "Link2",
    //         url: "/",
    //     },
    //     {
    //         name: "Link3",
    //         url: "/",
    //     },
    // ];

    return (
        <Box
            component="header" 
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Logo />
  
            {/* <HeaderLinks links={links} /> */}

            <HeaderAuth />
        </Box>
    )
};

export default Header;