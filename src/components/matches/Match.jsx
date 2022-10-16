import React from "react";

export default function Match({ user }) {
    return (
        <div className="matches-match">
            <div className="matches-match-body">
                <img src={require(`../../assets/images/${user?.posts[0]?.img || "model-3.jpg"}`)} alt="matched user" />
                <span>{user?.username}</span>
            </div>
        </div>
    );
}
