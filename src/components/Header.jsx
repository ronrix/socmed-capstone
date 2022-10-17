import React from "react";

import SearchResults from "./modals/SearchResults";
import Navigations from "./Navigations";
import { ReactComponent as Search } from "../assets/icons/searchnormal1.svg";
import { users } from "../config/users";

import "../assets/styles/css/header.css";

export default function Header() {
    const inputRef = React.useRef(null);
    const [searchInput, setSearchInput] = React.useState("");
    const [data, setData] = React.useState([]);
    const [showResults, setShowResults] = React.useState(false);

    const handleSearchFilter = e => {
        setSearchInput(e.target.value);
        setShowResults(true);

        setData(() => {
            return users.filter(a => {
                if (a.username.toLowerCase().includes(searchInput)) {
                    return a;
                }
            });
        });
    };

    React.useEffect(() => {}, [showResults]);

    return (
        <div className="header">
            <div className="header-container">
                <h1>Logo</h1>
                <form className="search-wrapper" onClick={() => inputRef.current.click()}>
                    <Search />
                    <input
                        type="search"
                        placeholder="Search your match"
                        ref={inputRef}
                        value={searchInput}
                        onChange={handleSearchFilter}
                        onBlur={() => setShowResults(false)}
                    />
                    <SearchResults data={data} showResults={showResults} />
                </form>

                <span className="space"></span>

                <Navigations active={"home"} otherClass={"mobile-view"} />
            </div>
        </div>
    );
}
