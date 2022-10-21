import React from "react";

import { users } from "../../../config/users";
import "../../../assets/styles/css/msgs.css";

export default function Msg({ from, msg, id }) {
    const user = users.find(user => user.id === id);

    return (
        <div className={`chat-msg ${from ? "from" : ""}`}>
            <img src={require(`../../../assets/images/${user.posts[0].img}`)} alt="" />
            <p>{msg}</p>
        </div>
    );
}
