import React from "react";

import Navigations from "../../Navigations";

import "../../../assets/styles/css/feed.css";
import { ReactComponent as Send } from "../../../assets/icons/send.svg";
import { ReactComponent as Profile } from "../../../assets/icons/circle-profile.svg";

import Msg from "./Msg";
import SideMsgs from "./SideMsgs";

export default function Messages() {
    return (
        <div className="feed">
            <div className="container">
                <Navigations active="chats" />
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
                    <span className="space">
                        <div className="side-content">
                            <div className="side-content-header">
                                <h2>Messages</h2>
                                <input type="search" placeholder="search message" />
                            </div>
                            <div className="side-content-msgs">
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
                    </span>
                </div>
            </div>
        </div>
    );
}
