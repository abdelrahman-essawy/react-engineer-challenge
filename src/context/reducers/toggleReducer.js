export const toggleReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK_RATING':
            return {
                ...state,
                rating: !state.rating,
                genre: false,
            }
        case 'CLICK_GENRE':
            return {
                ...state,
                rating: false,
                genre: !state.genre,
            }

        default:
            return state;
    }
};