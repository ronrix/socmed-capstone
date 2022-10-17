import React from "react";

const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            state.push({ user: action.user });
            return state;
        case "CREATE PROFILE":
            state.push({ profile: action.profile });
            return state;
        case "POST":
            state.push({ posts: [...state.posts, action.post] });
            return state;
        default:
            console.log("can't find action type");
    }
};
const usersReducer = (state, action) => {
    switch (action.type) {
        case "GET_ALL_POSTS":
            return state;
        case "LIKE":
            state = state.map(user => {
                if (user.id === action.id) {
                    user.matches.push(action.user);
                }
                return user;
            });

            return state;
        default:
            console.log("can't find action type");
    }
};

export { userReducer, usersReducer };
export const Context = React.createContext();
