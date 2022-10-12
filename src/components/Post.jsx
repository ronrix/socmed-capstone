import React from "react";

import "../assets/styles/css/post.css";
import { ReactComponent as Like } from "../assets/icons/like.svg";
import { ReactComponent as Profile } from "../assets/icons/profile.svg";

export default function Post() {
    return (
        <div className="post-wrapper">
            <div className="img-wrapper">
                <div className="info-overlay">
                    <div className="info-overlay-header">
                        <Profile />
                        Username
                    </div>
                    <div className="info-overlay-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatum veritatis aliquid et saepe
                            exercitationem ipsa! Quod beatae mollitia expedita.
                        </p>
                    </div>
                </div>
                <img src={require("../assets/images/model.jpg")} alt="sample post" />
            </div>
            <button>
                <Like />
                Like
            </button>
        </div>
    );
}
