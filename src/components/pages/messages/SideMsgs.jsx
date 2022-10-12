import React from "react";
import { ReactComponent as Profile } from "../../../assets/icons/circle-profile.svg";

export default function SideMsgs() {
    return (
        <div className="side-content-msg">
            <Profile />
            <div className="side-content-msg-body">
                <h4>username</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
}
