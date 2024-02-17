import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MyLineChart from "../line-chart/MyLineChart";

const ForumPost = ({post, toggleEditor}) => {

    // {
    //     "title": "string",
    //     "start": "2024-02-17",
    //     "finish": "2024-02-17",
    //     "amountFuel": 0,
    //     "description": "string",
    //     "status": "PRIVATE",
    //     "public": true
    // }

    return (
        <Container
            maxWidth="100%"
            sx={{
                p: "2rem 1rem",
                boxShadow: "4",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                }}
            >
                <Typography
                    component="h2"
                    sx={{
                        fontSize: "1.2rem",
                        fontWeight: "500",
                    }}
                >
                    {post.title}
                </Typography>

                <ButtonGroup 
                    variant="outlined"
                    size="small" 
                    aria-label="button group"
                >
                    <Button startIcon={<RemoveRedEyeIcon />}>
                        View
                    </Button>

                    <Button startIcon={<EditIcon />} onClick={toggleEditor}>
                        Edit
                    </Button>

                    <Button color="error" startIcon={<DeleteForeverIcon />}>
                        Delete
                    </Button>
                </ButtonGroup>
            </Box>

            <Typography
                sx={{
                    fontSize: "0.9rem",
                    wordWrap: "break-word",
                    marginBottom: "2rem",
                }}
            >
                {post.descr}
            </Typography>

            <MyLineChart title={post.title} />
        </Container>
    )
};

export default ForumPost;