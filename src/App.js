import React from "react";

// css
import "./assets/styles/css/index.css";
import "./assets/styles/css/variables.css";

// libraries
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// components
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/profile/Profile";
import Feed from "./components/pages/feed/Feed";
import Messages from "./components/pages/messages/Messages";
import FindMatch from "./components/pages/find-match/FindMatch";

import Navigations from "./components/Navigations";
import Matches from "./components/matches/Matches";
import Header from "./components/Header";
import Settings from "./components/modals/Settings";

function App() {
    React.useEffect(() => {}, []);
    const [showSettings, setShowSettings] = React.useState(false);

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Navigate to="/login" />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route
                    exact
                    path="/app"
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="container-left">
                                    <Navigations setShowSettings={setShowSettings} />
                                </div>
                                <div className="container-main">
                                    <Feed />
                                    {showSettings && <Settings setShowSettings={setShowSettings} />}
                                </div>

                                <div className={`container-right`}>
                                    <Matches />
                                </div>
                            </div>
                        </>
                    }
                />
                <Route
                    exact
                    path="/app/profile"
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="container-left">
                                    <Navigations setShowSettings={setShowSettings} />
                                </div>
                                <div className="container-main">
                                    <Profile />
                                    {showSettings && <Settings setShowSettings={setShowSettings} />}
                                </div>

                                <div className={`container-right`}>
                                    <Matches />
                                </div>
                            </div>
                        </>
                    }
                />
                <Route
                    exact
                    path="/app/messages"
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="container-left">
                                    <Navigations setShowSettings={setShowSettings} />
                                </div>
                                <div className="container-main">
                                    <Messages />
                                    {showSettings && <Settings setShowSettings={setShowSettings} />}
                                </div>

                                <div className={`container-right`}>
                                    <Matches />
                                </div>
                            </div>
                        </>
                    }
                />
                <Route
                    exact
                    path="/app/create-profile"
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="container-left">
                                    <Navigations setShowSettings={setShowSettings} />
                                </div>
                                <div className="container-main">
                                    <Profile />
                                    {showSettings && <Settings setShowSettings={setShowSettings} />}
                                </div>

                                <div className={`container-right`}>
                                    <Matches />
                                </div>
                            </div>
                        </>
                    }
                />
                <Route
                    exact
                    path="/app/find-match/:id"
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="container-left">
                                    <Navigations setShowSettings={setShowSettings} />
                                </div>
                                <div className="container-main">
                                    <FindMatch />
                                    {showSettings && <Settings setShowSettings={setShowSettings} />}
                                </div>

                                <div className={`container-right`}>
                                    <Matches />
                                </div>
                            </div>
                        </>
                    }
                />
                <Route
                    exact
                    path="/app/find-match"
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="container-left">
                                    <Navigations setShowSettings={setShowSettings} />
                                </div>
                                <div className="container-main">
                                    <FindMatch />
                                    {showSettings && <Settings setShowSettings={setShowSettings} />}
                                </div>

                                <div className={`container-right`}>
                                    <Matches />
                                </div>
                            </div>
                        </>
                    }
                />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
