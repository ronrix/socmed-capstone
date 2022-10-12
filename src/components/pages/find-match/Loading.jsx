import React from "react";

import { ReactComponent as Search } from "../../../assets/icons/searchfavorite1.svg";
import "../../../assets/styles/css/loading.css";

export default function Loading() {
    return (
        <div className="loading">
            <Search />
            <span>We're finding your match</span>
        </div>
    );
}
