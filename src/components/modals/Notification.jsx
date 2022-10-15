import React from "react";

import "../../assets/styles/css/notification.css";

export default function Notification({ show, notifBodyMsg, notifHeaderMsg, status }) {
    return (
        <div className={`notification ${show && "show"} `}>
            <div className={`notification-header ${status}`}>
                <h3>{notifHeaderMsg}</h3>
            </div>
            <div className="notification-body">
                <p>{notifBodyMsg}</p>
            </div>
        </div>
    );
}
