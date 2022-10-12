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

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Navigate to="/login" />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/app" element={<Feed />} />
                    <Route exact path="/app/profile" element={<Profile />} />
                    <Route exact path="/app/messages" element={<Messages />} />
                    <Route exact path="/app/create-profile" element={<Profile />} />
                    <Route exact path="/app/find-match" element={<FindMatch />} />
                    <Route exact path="/app/settings" element={<h1>Settings</h1>} />
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
