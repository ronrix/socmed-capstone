import React from "react";

import Match from "./Match";
import { users } from "../../config/users";

import "../../assets/styles/css/matches.css";

export default function Matches() {
    const matches = users.filter(user => user.id !== 1);
    const [location, setLocation] = React.useState(() => window.location.pathname.split("/")[2]);

    React.useEffect(() => {
        setLocation(() => window.location.pathname.split("/")[2]);
        function changeLocation() {
            setLocation(() => window.location.pathname.split("/")[2]);
        }
        window.addEventListener("click", changeLocation);

        return () => {
            window.removeEventListener("click", changeLocation);
        };
    }, [location]);

    return (
        <div className="matches" style={{ display: location === "messages" ? "none" : "" }}>
            <h5>Matches</h5>
            {matches.map(user => (
                <Match key={user.id} user={user} />
            ))}
        </div>
    );
}
