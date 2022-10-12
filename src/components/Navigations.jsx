import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/css/navigations.css";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as Message } from "../assets/icons/messagefavorite.svg";
import { ReactComponent as Profile } from "../assets/icons/circle-profile.svg";
import { ReactComponent as Search } from "../assets/icons/searchfavorite1.svg";
import { ReactComponent as Settings } from "../assets/icons/setting.svg";
import { ReactComponent as Logout } from "../assets/icons/logout.svg";
import Match from "./pages/feed/Match";

export default function Navigations({ active, otherClass }) {
    return (
        <nav className={`${otherClass ? otherClass : ""}`}>
            <Link to="/app" className={`${active === "home" && "active"}`}>
                <abbr title="Home">
                    <Home />
                </abbr>
                <span>Home</span>
            </Link>
            <Link to="/app/profile" className={`${active === "profile" && "active"}`}>
                <abbr title="Profile">
                    <Profile />
                </abbr>
                <span>Profile</span>
            </Link>
            <Link to="/app/messages" className={`${active === "chats" && "active"}`}>
                <abbr title="Chats">
                    <Message />
                </abbr>
                <span>Chats</span>
            </Link>
            <Link to="/app/find-match" className={`${active === "find-match" && "active"}`}>
                <abbr title="Find your Match">
                    <Search />
                </abbr>
                <span>Find Your Match</span>
            </Link>
            <Link to="/app/settings" className={`${active === "settings" && "active"}`}>
                <abbr title="Settings">
                    <Settings />
                </abbr>
                <span>Settings</span>
            </Link>
            <Link to="/logout">
                <abbr title="Logout">
                    <Logout />
                </abbr>
                <span>Logout</span>
            </Link>
            <div className="matches">
                <h5>Matches</h5>
                <Match />
                <Match />
                <Match />
                <Match />
            </div>
        </nav>
    );
}
