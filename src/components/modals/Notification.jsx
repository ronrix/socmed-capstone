import React from "react";

import { ReactComponent as Notif } from "../../assets/icons/notif-solid.svg";
import "../../assets/styles/css/notification.css";

export default function Notification({ show, notifBodyMsg, notifHeaderMsg, status }) {
    return (
        <div className={`notification ${show && "show"} `}>
            <div className={`notification-header ${status}`}>
                <h3>
                    <Notif />
                    {notifHeaderMsg}
                </h3>
            </div>
            <div className="notification-body">
                <p>{notifBodyMsg}</p>
            </div>
        </div>
    );
}
