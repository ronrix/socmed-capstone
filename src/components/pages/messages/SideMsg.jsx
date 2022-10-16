import React from "react";
import { users } from "../../../config/users";

export default function SideMsg({ data, handleDisplayMsgs, id }) {
    const user = users.find(user => user.id === data.id);

    return (
        <div className="side-container-msgs-body-msg-wrapper" onClick={() => handleDisplayMsgs(id)}>
            <img src={require(`../../../assets/images/${user.posts[0].img}`)} alt="" />
            <div className="side-container-msgs-body-msg-wrapper-body">
                <h4>{user.username}</h4>
                <p>{data.msgs[0].msg}</p>
            </div>
        </div>
    );
}
