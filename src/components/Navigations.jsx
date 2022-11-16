import React from "react";
import { Link, useNavigate } from "react-router-dom";

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

import axios from "axios";
import { BASE_URL } from "../config/global-variables";

export default function Navigations({ otherClass, setShowSettings }) {
    const [activePath, setActivePath] = React.useState(() =>
        localStorage.getItem("active-page") ? localStorage.getItem("active-page") : "home"
    );

    const navigate = useNavigate();

    const handleActivePage = str => {
        localStorage.setItem("active-page", str);
        setActivePath(str);
    };

    const handleLogout = e => {
        axios
            .get(BASE_URL + "/logout", { withCredentials: true })
            .then(res => {
                console.log(res);
                navigate("/login");
            })
            .catch(err => {
                console.log(err);
            });

        e.preventDefault();
    };

    React.useEffect(() => {
        setActivePath(() => (localStorage.getItem("active-page") ? localStorage.getItem("active-page") : "home"));
    }, []);

    return (
        <>
            <nav className={`${otherClass ? otherClass : ""}`}>
                <Link to="/app" onClick={() => handleActivePage("home")} className={`${activePath === "home" ? "active" : ""}`}>
                    <abbr title="home">{activePath === "home" ? <HomeSolid /> : <Home />}</abbr>
                    <span>home</span>
                </Link>
                <Link
                    to="/app/profile"
                    onClick={() => handleActivePage("profile")}
                    className={`${activePath === "profile" ? "active" : ""}`}
                >
                    <abbr title="profile">{activePath === "profile" ? <ProfileSolid /> : <Profile />}</abbr>
                    <span>{JSON.parse(localStorage.getItem("socmed-profile")).fullname.split(" ")[0]}</span>
                </Link>
                <Link to="/app/messages" onClick={() => handleActivePage("chats")} className={`${activePath === "chats" ? "active" : ""}`}>
                    <abbr title="Chats">{activePath === "chats" ? <MessageSolid /> : <Message />}</abbr>
                    <span>chats</span>
                </Link>
                <Link
                    to="/app/find-match"
                    onClick={() => handleActivePage("find-match")}
                    className={`${activePath === "find-match" ? "active" : ""}`}
                >
                    <abbr title="Find your Match">{activePath === "find-match" ? <SearchSolid /> : <Search />}</abbr>
                    <span>find your match</span>
                </Link>
                <Link to="#settings" className={`${activePath === "settings" ? "active" : ""}`} onClick={() => setShowSettings(true)}>
                    <abbr title="Settings">{activePath === "settings" ? <SettingsSolid /> : <SettingsIcon />}</abbr>
                    <span>settings</span>
                </Link>
                <Link onClick={handleLogout}>
                    <abbr title="Logout">
                        <Logout />
                    </abbr>
                    <span>logout</span>
                </Link>
            </nav>
        </>
    );
}
