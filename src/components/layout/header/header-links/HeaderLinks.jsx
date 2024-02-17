import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Link as MUILink } from "@mui/material";

const HeaderLinks = ({links = [], isVertical = false}) => {

    const gridTemplateColumns = isVertical ? "1" : `repeat(${links.length}, 1fr)`;

    return (
        <Box
            display="grid"
            gridTemplateColumns={gridTemplateColumns}
            alignItems="center"
            gap="1.5rem"
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