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

    const dummy = [
        {
            title: "First",
            descr: "DescrDescrDescrDescrDescrDescrDescrDescrDescrDescrDescrDescrDescrDescr",
            amountFuel: 5,
            status: "PUBLIC",
            public: true,
            start: new Date(),
            finish: new Date(new Date().setDate(new Date().getDate() + 30)),
        },
        {
            title: "Second",
            descr: "Descr",
            amountFuel: 32,
            status: "PUBLIC",
            public: true,
            start: new Date(),
            finish: new Date(new Date().setDate(new Date().getDate() + 15)),
        },
    ]

    useEffect(() => {
        const controller = new AbortController();

        const fetchPosts = async () => {
            let posts = await getAllPosts();
            
            if(posts === undefined) posts = [];

            setPosts(posts);

            console.log(posts);
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
            <ForumPostEditor post={updateablePost} />
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
                dummy.map((post, i) => <ForumPost key={i} post={post} toggleEditor={toggleEditor} />)
            }
            </Container>
    }
    </>
    )
};

export default Feed;