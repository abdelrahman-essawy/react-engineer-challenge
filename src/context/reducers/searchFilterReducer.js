export const searchFilterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_KEYWORD':
            return {
                ...state,
                keyword: action.payload,
            };
        case 'SET_RATING':
            return {
                ...state,
                rating: action.payload,
            };
        case 'SET_GENRE':
            return {
                ...state,
                genre: action.payload,
            };

        default:
            return state;
    }
};

