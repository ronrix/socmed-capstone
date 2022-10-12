import React from "react";

import Header from "../../Header";
import Navigations from "../../Navigations";
import Post from "../../Post";
import PostForm from "./PostForm";

import reducer from "../../../config/reducer";
import "../../../assets/styles/css/feed.css";

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
    const [posts, dispatch] = React.useReducer(reducer, initialPosts);

    const formSubmit = values => {
        dispatch({ type: "POST", values });
    };

    React.useEffect(() => {
        console.log(posts.reverse());
    }, [posts]);

    return (
        <div className="feed">
            <div className="container">
                <Header />
                <div className="inside-container">
                    <span className="space"></span>
                    <Navigations active="home" />
                    <div className="posts">
                        <PostForm dispatch={formSubmit} />
                        {posts.reverse().map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                    <span className="space"></span>
                </div>
            </div>
        </div>
    );
}
