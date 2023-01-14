
export function moviesReducer(state , action) {
    switch (action.type) {
        case 'SET_MOVIES':
            return { ...state, movies: action.payload };
        case 'SET_RATING':
            return { ...state, rating: action.payload };
        case 'SET_GENRE':
            return { ...state, genre: action.payload };
        default:
            return state;
    }
}