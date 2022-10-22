import React from "react";

import { ReactComponent as Notif } from "../../assets/icons/notif-solid.svg";
import "../../assets/styles/css/notification.css";

export default function Notification({ show, notifBodyMsg, setShowNoticationModal }) {
    React.useEffect(() => {
        setTimeout(() => {
            setShowNoticationModal(false);
        }, 5000);
    }, [show]);

    return (
        <div className={`notification ${show ? "show" : "hide"}`}>
            <div className="toast-header">
                <Notif />
                <strong className="me-auto">Message</strong>
            </div>
            <div className="toast-body">{notifBodyMsg}</div>
        </div>
    );
}
