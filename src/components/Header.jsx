import React from "react";

import "../assets/styles/css/header.css";
import { ReactComponent as Search } from "../assets/icons/searchnormal1.svg";

export default function Header() {
    const inputRef = React.useRef(null);

    return (
        <div className="header">
            <span className="space"></span>
            <div>
                <h1>Logo</h1>
                <form className="search-wrapper" onClick={() => inputRef.current.click()}>
                    <Search />
                    <input type="search" placeholder="Search" ref={inputRef} />
                </form>
            </div>
            <span className="space"></span>
        </div>
    );
}
