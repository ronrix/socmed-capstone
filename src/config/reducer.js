const reducer = (state, action) => {
    switch (action.type) {
        case "POST":
            state.push({
                id: state.length + 1,
                username: "Test " + state.length + 1,
                description: action.values.description,
                imgPath: action.values.file.name
            });
            console.log(state);

            return state;
        default:
            console.log("can't find action type");
    }
};

export default reducer;
