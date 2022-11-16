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
    const [showSettings, setShowSettings] = React.useState(false);
    const [auth, setAuth] = React.useState(() => localStorage.getItem("token"));

    React.useEffect(() => {
        setAuth(() => localStorage.getItem("token"));
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <>
                            {auth && <Navigate to="/app" />}
                            <Navigate to="/login" />
                        </>
                    } />
                <Route exact path="/login" element={
                <>
                            {auth && <Navigate to="/app" />}
                <Login />
</>
                } />
                <Route exact path="/signup" element={<>
                            {auth && <Navigate to="/app" />}
                <Signup /></>} />
                <Route
                    exact
                    path="/app"
                    element={
                        <>
                            {!auth && <Navigate to="/login" />}
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
                            {!auth && <Navigate to="/login" />}
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
                            {!auth && <Navigate to="/login" />}
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
                            {!auth && <Navigate to="/login" />}
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
                            {!auth && <Navigate to="/login" />}
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
                            {!auth && <Navigate to="/login" />}
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
