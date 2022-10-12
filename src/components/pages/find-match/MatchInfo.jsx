import React from "react";

export default function MatchInfo({ title, desc, icon }) {
    return (
        <div className="match-info-container">
            <h5>{icon}</h5>
            <div>
                <h5>{title}</h5>
                {desc}
            </div>
        </div>
    );
}
