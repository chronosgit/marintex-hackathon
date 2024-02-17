import { Link } from "react-router-dom";
import { Box } from "@mui/material";

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
                <Link
                    key={i}
                    to={link.url}
                >
                    {link.name}
                </Link>
            )
        }
        </Box>
    )
};

export default HeaderLinks;