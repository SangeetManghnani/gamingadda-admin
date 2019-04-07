export default function matchesReducer(state = { matches: [] }, action) {
    switch (action.type) {
        case 'FETCHED_ALL_MATCHES_SUCCESS':
            return {
                matches: action.matches
            }
        default:
            return state;
    }
}