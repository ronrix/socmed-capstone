import React from "react";

import "../assets/styles/css/post.css";
import { ReactComponent as Like } from "../assets/icons/like.svg";
import { ReactComponent as Profile } from "../assets/icons/profile.svg";

export default function Post({ post }) {
    return (
        <div className="post-wrapper">
            <div className="img-wrapper">
                <div className="info-overlay">
                    <div className="info-overlay-header">
                        <Profile />
                        {post.username}
                    </div>
                    <div className="info-overlay-body">
                        <p>{post.description}</p>
                    </div>
                </div>
                <img src={require(`../assets/images/${post.imgPath}`)} alt="sample post" />
            </div>
            <button>
                <Like />
                Like
            </button>
        </div>
    );
}
