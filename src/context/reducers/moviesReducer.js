
export function moviesReducer(state , action) {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return { ...state, movies: action.payload };
        default:
            return state;
    }
}