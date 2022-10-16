import React from "react";

import { useNavigate } from "react-router-dom";

export default function SearchResults({ data, searchInput }) {
    const navigate = useNavigate();

    const handleClickUser = id => {
        navigate("/app/find-match/" + id);
    };

    return (
        <div className={`search-results ${searchInput && "show"}`}>
            <span>results</span>
            {data.map((user, key) => {
                return (
                    <div key={key} className={`search-results-user`} onClick={() => handleClickUser(user.id)}>
                        <img src={require(`../../assets/images/${user?.posts[0]?.img}`)} alt="profile" />
                        <span>{user.username}</span>
                    </div>
                );
            })}
        </div>
    );
}
