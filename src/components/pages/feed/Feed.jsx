import React from "react";

import Post from "./Post";
import PostFormModal from "../../modals/PostFormModal";

import { ReactComponent as Camera } from "../../../assets/icons/camera.svg";
import "../../../assets/styles/css/feed.css";

const initialPosts = [
    {
        id: 1,
        username: "Test 1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        imgPath: "model.jpg"
    },
    {
        id: 2,
        username: "Test 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        imgPath: "model-1.jpg"
    },
    {
        id: 3,
        username: "Test 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        imgPath: "model-2.webp"
    }
];

export default function Feed() {
    const [posts, setPosts] = React.useState(initialPosts);
    const [showPostFormModal, setShowPostFormModal] = React.useState(false);
    let clonePosts = [...posts];

    const handlePostSubmit = values => {
        // dispatch({ type: "POST", values });
        setPosts([
            ...posts,
            {
                id: posts.length + 1,
                username: "Test " + (posts.length + 1),
                description: values.description,
                imgFile: URL.createObjectURL(values.file)
            }
        ]);

        clonePosts = [...posts];
    };

    React.useEffect(() => {}, [posts]);

    return (
        <>
            <div className="feed-container-content">
                {showPostFormModal && <PostFormModal handlePostSubmit={handlePostSubmit} setShowPostFormModal={setShowPostFormModal} />}

                <button className="upload-btn" onClick={() => setShowPostFormModal(true)}>
                    <Camera />
                    Upload new post
                </button>
                <div className="posts">
                    {clonePosts.reverse().map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </>
    );
}
