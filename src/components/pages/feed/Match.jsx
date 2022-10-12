import React from "react";
import { ReactComponent as Profile } from "../../../assets/icons/circle-profile.svg";

export default function Match() {
    return (
        <div className="matches-match">
            <div className="matches-match-body">
                <img src={require("../../../assets/images/model.jpg")} alt="matched user" />
                <span>Username</span>
            </div>
        </div>
    );
}
