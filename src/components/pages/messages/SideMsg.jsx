import React from "react";
import { ReactComponent as Profile } from "../../../assets/icons/circle-profile.svg";

export default function SideMsg() {
    return (
        <div className="side-container-msgs-body-msg-wrapper">
            <Profile />
            <div className="side-container-msgs-body-msg-wrapper-body">
                <h4>username</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
}
