import React from "react";

import Navigations from "../../Navigations";

import "../../../assets/styles/css/feed.css";
import { ReactComponent as Send } from "../../../assets/icons/send.svg";
import { ReactComponent as Profile } from "../../../assets/icons/circle-profile.svg";
import { ReactComponent as Menu } from "../../../assets/icons/menu.svg";
import { ReactComponent as MessageIcon } from "../../../assets/icons/messagefavorite.svg";

import Msg from "./Msg";
import SideMsgs from "./SideMsg";

export default function Messages() {
    const [showMsgs, setShowMsgs] = React.useState(false);

    return (
        <div className="feed">
            <div className="container">
                <Navigations active="chats" otherClass="msg-nav" />
                <div className="inside-container">
                    <span className="space"></span>
                    <div className="chats">
                        <div className="chats-header">
                            <Profile />
                            <span>Username</span>
                        </div>
                        <div className="chats-body">
                            <Msg />
                            <Msg from={true} />
                            <Msg />
                            <Msg from={true} />
                            <Msg />
                            <Msg />
                            <Msg />
                            <Msg from={true} />
                        </div>
                        <form action="" className="chats-form">
                            <textarea placeholder="Type your message here..."></textarea>
                            <button type="submit">
                                SEND
                                <Send />
                            </button>
                        </form>
                    </div>
                    <div className="side-container-menubar">
                        <Menu onClick={() => setShowMsgs(!showMsgs)} />
                    </div>
                    <span className="space">
                        <div className={`side-container ${showMsgs ? "show" : ""}`}>
                            <div className="side-container-msgs">
                                <div className="side-container-msgs-header">
                                    <h2>
                                        <MessageIcon />
                                        Messages
                                    </h2>
                                    <input type="search" placeholder="search message" />
                                </div>
                                <div className="side-container-msgs-body">
                                    <SideMsgs />
                                    <SideMsgs />
                                    <SideMsgs />
                                    <SideMsgs />
                                    <SideMsgs />
                                    <SideMsgs />
                                    <SideMsgs />
                                    <SideMsgs />
                                    <SideMsgs />
                                    <SideMsgs />
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
