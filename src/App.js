import React from "react";

// css
import "./assets/styles/css/index.css";
import "./assets/styles/css/variables.css";

// libraries
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

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

function App() {
    React.useEffect(() => {}, []);

    return (
        <Router>
            <Header />
            <div className="container">
                <div className="container-left">
                    <Navigations />
                </div>
                <div className="container-main">
                    <Routes>
                        <Route exact path="/" element={<Navigate to="/login" />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/app" element={<Feed />} />
                        <Route exact path="/app/profile" element={<Profile />} />
                        <Route exact path="/app/messages" element={<Messages />} />
                        <Route exact path="/app/create-profile" element={<Profile />} />
                        <Route exact path="/app/find-match/:id" element={<FindMatch />} />
                        <Route exact path="/app/find-match" element={<FindMatch />} />
                        <Route path="*" element={<h1>Page not found</h1>} />
                    </Routes>
                </div>

                <div className={`container-right`}>
                    <Matches />
                </div>
            </div>
        </Router>
    );
}

export default App;
