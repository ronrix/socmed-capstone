import React from "react";

import SearchResults from "./modals/SearchResults";
import "../assets/styles/css/header.css";
import { ReactComponent as Search } from "../assets/icons/searchnormal1.svg";
import { users } from "../config/users";

export default function Header() {
    const inputRef = React.useRef(null);
    const [searchInput, setSearchInput] = React.useState("");
    const [data, setData] = React.useState([]);

    const handleSearchFilter = e => {
        setSearchInput(e.target.value);

        setData(() => {
            return users.filter(a => {
                if (a.username.toLowerCase().includes(searchInput)) {
                    return a;
                }
            });
        });
    };

    React.useEffect(() => {}, []);

    return (
        <div className="header">
            <span className="space"></span>
            <div>
                <h1>Logo</h1>
                <form className="search-wrapper" onClick={() => inputRef.current.click()}>
                    <Search />
                    <input type="search" placeholder="Search" ref={inputRef} value={searchInput} onChange={handleSearchFilter} />
                </form>

                <SearchResults data={data} searchInput={searchInput} />
            </div>
            <span className="space"></span>
        </div>
    );
}
