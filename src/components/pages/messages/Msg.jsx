import React from "react";
import { ReactComponent as Profile } from "../../../assets/icons/circle-profile.svg";

export default function Msg({ from }) {
    return (
        <div className={`chats-body-msg ${from ? "from" : ""}`}>
            <Profile />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quaerat.</p>
        </div>
    );
}
