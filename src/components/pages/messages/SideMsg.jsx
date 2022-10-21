import React from "react";
import { users } from "../../../config/users";

import "../../../assets/styles/css/side-msgs.css";

export default function SideMsg({ data, handleDisplayMsgs, id }) {
    const user = users.find(user => user.id === data.id);

    return (
        <div className="side-msg" onClick={() => handleDisplayMsgs(id)}>
            <img src={require(`../../../assets/images/${user.posts[0].img}`)} alt="" />
            <div className="side-msg-content">
                <h4>{user.username}</h4>
                <p>{data.msgs[0].msg}</p>
            </div>
        </div>
    );
}
