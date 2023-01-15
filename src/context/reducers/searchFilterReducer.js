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
                rating: parseInt(action.payload),
            };
        case 'REMOVE_RATING':
            return {
                ...state,
                genre: [parseInt(...state.rating.filter((rating) => rating !== action.payload))]
            };
        case 'SET_GENRE':
            return {
                ...state,
                genre: [
                    ...state.genre,
                    action.payload,
                ]
            };
        case 'REMOVE_GENRE':
            return {
                ...state,
                genre: [...state.genre.filter((genre) => genre !== action.payload)]
            };

        default:
            return state;
    }
};

