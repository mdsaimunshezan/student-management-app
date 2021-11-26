const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return [...state, action.newStudent];

        case "DELETE_ITEM":
            if (window.confirm("are you want to delete this")) {
                const filterItem = state.filter(f => f.id !== action.id);
                return filterItem;
            }

        



        default:
            return state;
    }

}

export default Reducer;