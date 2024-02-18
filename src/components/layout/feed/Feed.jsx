import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import getAllPosts from "src/utils/getAllPosts";
import ForumPost from "../forum-post/ForumPost";
import ForumPostEditor from "../forum-post-editor/ForumPostEditor";
import getPersonalPosts from "src/utils/getPersonalPosts";
import getObjectOfPersonalPostIds from "src/utils/getObjectOfPersonalPostIds";

const Feed = () => {

    const [posts, setPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);

    const [isEdit, setEdit] = useState(false);
    const [updateablePost, setUpdateablePost] = useState({});

    let myPostIds = getObjectOfPersonalPostIds(myPosts);

    const toggleEditor = () => {
        setEdit(prev => !prev);
    }

    useEffect(() => {
        const controller = new AbortController();

        const fetchPosts = async () => {
            let posts = await getAllPosts();
            let myPosts = await getPersonalPosts();
            
            if(posts === undefined) posts = [];
            if(myPosts === undefined) myPosts = [];

            setPosts(posts);
            setMyPosts(myPosts);
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
                posts.map((post, i) => {
                    const isPersonal = Object.prototype.hasOwnProperty.call(myPostIds, post.id);

                    return (
                        <ForumPost 
                            key={i} 
                            post={post} 
                            isPersonal={isPersonal}
                            toggleEditor={toggleEditor} 
                            setUpdateablePost={setUpdateablePost} 
                        />
                    )
                })
            }
            </Container>
    }
    </>
    )
};

export default Feed;