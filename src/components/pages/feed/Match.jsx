import React from "react";
import { ReactComponent as Profile } from "../../../assets/icons/circle-profile.svg";

export default function Match() {
    return (
        <div className="side-content-matches-match">
            <div className="side-content-matches-match-body">
                <Profile />
                <span>Username</span>
            </div>
        </div>
    );
}
