import React from "react";
import Header from "../../Header";
import Navigations from "../../Navigations";
import Post from "../../Post";
import PostForm from "./PostForm";

import "../../../assets/styles/css/feed.css";
import Match from "./Match";

export default function Feed() {
    return (
        <div className="feed">
            <div className="container">
                <Header />
                <div className="inside-container">
                    <span className="space"></span>
                    <Navigations active="home" />
                    <div className="posts">
                        <PostForm />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                    <span className="space">
                        <div className="side-content-matches">
                            <h2>Matches</h2>
                            <Match />
                            <Match />
                            <Match />
                            <Match />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
