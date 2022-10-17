import React from "react";

import { Formik, Field } from "formik";

import { ReactComponent as Send } from "../../../assets/icons/send.svg";
import { ReactComponent as Profile } from "../../../assets/icons/circle-profile.svg";
import { ReactComponent as Menu } from "../../../assets/icons/menu.svg";
import { ReactComponent as MessageIcon } from "../../../assets/icons/messagefavorite.svg";

import Msg from "./Msg";
import SideMsgs from "./SideMsg";
import { sampleMsgs } from "../../../config/messages";
import { users } from "../../../config/users";

import "../../../assets/styles/css/messages.css";

export default function Messages() {
    const [showMsgs, setShowMsgs] = React.useState(false);
    const [msgState, setMsgState] = React.useState(sampleMsgs[1]);

    const [allMsgs, setAllMsgs] = React.useState(sampleMsgs);
    const [searchMsg, setSearchMsg] = React.useState("");

    const [user, setUser] = React.useState(null);

    const handleDisplayMsgs = id => {
        setMsgState(sampleMsgs[id]);
    };

    const handleSearchMsg = e => {
        setSearchMsg(e.target.value);
        setAllMsgs(() =>
            sampleMsgs.filter(msg => {
                const tempUser = users.find(a => a.id === msg.id);
                if (tempUser.username.toLowerCase().includes(searchMsg)) {
                    return msg;
                }
            })
        );
    };

    React.useEffect(() => {
        setUser(() => users.find(user => user.id === msgState.id));
    }, [msgState, user]);

    return (
        <Formik
            initialValues={{ msg: "" }}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                actions.resetForm();
                setMsgState(prevState => ({ id: prevState.id, msgs: [...prevState.msgs, { id: 1, msg: values.msg }] }));
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit} className="chats">
                    <div className="chats-inside">
                        <div className="chats-inside-header">
                            {user ? <img src={user && require(`../../../assets/images/${user.posts[0].img}`)} alt="" /> : <Profile />}
                            <span>{user?.username}</span>
                        </div>
                        <div className="chats-inside-body">
                            {msgState.msgs.map((msg, key) => {
                                return <Msg id={msg.id} key={key} from={msg.id === 1} msg={msg.msg} />;
                            })}
                        </div>
                        <div className="chats-inside-form">
                            <Field
                                as="textarea"
                                placeholder="Type your message here..."
                                name="msg"
                                value={props.values.msg}
                                onChange={props.handleChange}
                            />
                            <button type="submit">
                                SEND
                                <Send />
                            </button>
                        </div>
                    </div>

                    <div className="side-container">
                        <Menu onClick={() => setShowMsgs(!showMsgs)} />
                        <div className={`inside ${showMsgs ? "show" : ""}`}>
                            <div className="inside-msgs">
                                <div className="inside-msgs-header">
                                    <h2>
                                        <MessageIcon />
                                        Messages
                                    </h2>
                                    <input type="search" placeholder="search message" value={searchMsg} onChange={handleSearchMsg} />
                                </div>
                                <div className="inside-msgs-body">
                                    {allMsgs?.map((data, id) => {
                                        return <SideMsgs key={id} id={id} data={data} handleDisplayMsgs={handleDisplayMsgs} />;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
}
