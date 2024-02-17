import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Link as MUILink } from "@mui/material";

const HeaderLinks = ({links = []}) => {

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="3rem"
        >
        {
            links.map((link, i) => 
                <MUILink
                    key={i}
                    component={ReactRouterLink}
                    href={link.url}
                    underline="none"
                >
                    {link.name}
                </MUILink>
            )
        }
        </Box>
    )
};

export default HeaderLinks;