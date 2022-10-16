import React from "react";

import Header from "../../Header";
import Navigations from "../../Navigations";
import Post from "../../Post";
import PostForm from "./PostForm";
import Matches from "../../matches/Matches";

// import reducer from "../../../config/reducer";
import "../../../assets/styles/css/feed.css";
import PostPreview from "../../modals/PostPreview";

const initialPosts = [
    {
        id: 1,
        username: "Test 1",
        description: "testing testing",
        imgPath: "model.jpg"
    },
    {
        id: 2,
        username: "Test 2",
        description: "testing testing",
        imgPath: "model.jpg"
    },
    {
        id: 3,
        username: "Test 3",
        description: "testing testing",
        imgPath: "model.jpg"
    }
];

export default function Feed() {
    // const [posts, dispatch] = React.useReducer(reducer, initialPosts);
    const [posts, setPosts] = React.useState(initialPosts);
    const [postPreview, setPostPreview] = React.useState(null);
    let clonePosts = [...posts];

    const formSubmit = values => {
        // dispatch({ type: "POST", values });
        console.log(values);
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

    const handlePreviewPost = post => {
        setPostPreview(post);
    };

    React.useEffect(() => {}, [posts]);

    return (
        <div className="feed">
            <div className="container">
                <Header />
                <div className="inside-container">
                    <span className="space"></span>
                    <Navigations active="home" />
                    <div className="posts">
                        <PostForm formSubmit={formSubmit} />

                        <PostPreview post={postPreview} setPostPreview={setPostPreview} />

                        {clonePosts.reverse().map(post => (
                            <Post key={post.id} post={post} onClick={handlePreviewPost} />
                        ))}
                    </div>
                    <span className="space">
                        <Matches />
                    </span>
                </div>
            </div>
        </div>
    );
}
