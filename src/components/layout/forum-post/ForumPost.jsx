import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MyLineChart from "../line-chart/MyLineChart";
import deletePost from "src/utils/deletePost";
import { useNavigate } from "react-router-dom";

const ForumPost = ({post, toggleEditor, setUpdateablePost}) => {
    const navigate = useNavigate();

    const onEdit = () => {
        setUpdateablePost(post);

        toggleEditor();
    }

    const onDelete = async () => {
        await deletePost(post.id);

        navigate(0)
    }

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
                    marginBottom: "2rem",
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
                    <Button startIcon={<EditIcon />} onClick={onEdit}>
                        Edit
                    </Button>

                    <Button 
                        color="error" 
                        startIcon={<DeleteForeverIcon />}
                        onClick={onDelete}
                    >
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
                {post.description}
            </Typography>

            <MyLineChart 
                title={post.title} 
                value={post.amountFuel} 
                start={post.start}
                end={post.finish}
            />
        </Container>
    )
};

export default ForumPost;