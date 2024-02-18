import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import getAllPosts from "src/utils/getAllPosts";
import ForumPost from "../forum-post/ForumPost";
import ForumPostEditor from "../forum-post-editor/ForumPostEditor";

const Feed = () => {

    const [posts, setPosts] = useState([]);

    const [isEdit, setEdit] = useState(false);
    const [updateablePost, setUpdateablePost] = useState({});

    const toggleEditor = () => {
        setEdit(prev => !prev);
    }

    useEffect(() => {
        const controller = new AbortController();

        const fetchPosts = async () => {
            let posts = await getAllPosts();
            
            if(posts === undefined) posts = [];

            setPosts(posts);
        }

        fetchPosts();

        return () => {
            controller.abort();
        }
    }, [])

    return (
    <>
    {
        isEdit ?
            <ForumPostEditor {...updateablePost} />
        :
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "3rem",
                }}
            >
            {
                posts.map((post, i) => 
                    <ForumPost 
                        key={i} 
                        post={post} 
                        toggleEditor={toggleEditor} 
                        setUpdateablePost={setUpdateablePost} 
                    />
                )
            }
            </Container>
    }
    </>
    )
};

export default Feed;