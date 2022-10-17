import React from "react";
import { Link, useLocation } from "react-router-dom";

import Settings from "./modals/Settings";
import "../assets/styles/css/navigations.css";

// line icons
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as Message } from "../assets/icons/messagefavorite.svg";
import { ReactComponent as Profile } from "../assets/icons/circle-profile.svg";
import { ReactComponent as Search } from "../assets/icons/searchfavorite1.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/setting.svg";
import { ReactComponent as Logout } from "../assets/icons/logout.svg";

// solid icons
import { ReactComponent as HomeSolid } from "../assets/icons/home-solid.svg";
import { ReactComponent as MessageSolid } from "../assets/icons/messagefavorite-solid.svg";
import { ReactComponent as ProfileSolid } from "../assets/icons/circle-profile-solid.svg";
import { ReactComponent as SearchSolid } from "../assets/icons/searchfavorite1-solid.svg";
import { ReactComponent as SettingsSolid } from "../assets/icons/setting-solid.svg";

export default function Navigations({ otherClass }) {
    const [settingsModal, setShowSettingsModal] = React.useState(false);
    const [activePath, setActivePath] = React.useState(() =>
        localStorage.getItem("active-page") ? localStorage.getItem("active-page") : "home"
    );

    const handleActivePage = str => {
        localStorage.setItem("active-page", str);
        setActivePath(str);
    };

    React.useEffect(() => {}, []);

    return (
        <nav className={`${otherClass ? otherClass : ""}`}>
            {settingsModal && <Settings setShowSettingsModal={setShowSettingsModal} />}

            <Link to="/app" onClick={() => handleActivePage("home")} className={`${activePath === "home" ? "active" : ""}`}>
                <abbr title="Home">{activePath === "home" ? <HomeSolid /> : <Home />}</abbr>
                <span>Home</span>
            </Link>
            <Link to="/app/profile" onClick={() => handleActivePage("profile")} className={`${activePath === "profile" ? "active" : ""}`}>
                <abbr title="Profile">{activePath === "profile" ? <ProfileSolid /> : <Profile />}</abbr>
                <span>Profile</span>
            </Link>
            <Link to="/app/messages" onClick={() => handleActivePage("chats")} className={`${activePath === "chats" ? "active" : ""}`}>
                <abbr title="Chats">{activePath === "chats" ? <MessageSolid /> : <Message />}</abbr>
                <span>Chats</span>
            </Link>
            <Link
                to="/app/find-match"
                onClick={() => handleActivePage("find-match")}
                className={`${activePath === "find-match" ? "active" : ""}`}
            >
                <abbr title="Find your Match">{activePath === "find-match" ? <SearchSolid /> : <Search />}</abbr>
                <span>Find Your Match</span>
            </Link>
            <Link to="#settings" className={`${activePath === "settings" ? "active" : ""}`} onClick={() => setShowSettingsModal(true)}>
                <abbr title="Settings">{activePath === "settings" ? <SettingsSolid /> : <SettingsIcon />}</abbr>
                <span>Settings</span>
            </Link>
            <Link to="/login">
                <abbr title="Logout">
                    <Logout />
                </abbr>
                <span>Logout</span>
            </Link>
        </nav>
    );
}
