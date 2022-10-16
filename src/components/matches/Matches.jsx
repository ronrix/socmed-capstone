import React from "react";

import Match from "./Match";
import { users } from "../../config/users";

import "../../assets/styles/css/matches.css";

export default function Matches() {
    const matches = users.filter(user => user.id !== 1);

    React.useEffect(() => {}, []);

    return (
        <div className="matches">
            <h5>Matches</h5>
            {matches.map(user => (
                <Match key={user.id} user={user} />
            ))}
        </div>
    );
}
