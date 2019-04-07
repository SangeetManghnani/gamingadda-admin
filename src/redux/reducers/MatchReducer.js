import _ from 'lodash';

export default function matchesReducer(state = { matches: [], fetchingMatches: false }, action) {
    switch (action.type) {
        case 'FETCHED_ALL_MATCHES_SUCCESS':
            const matchState = _.cloneDeep(state);
            matchState.matches = action.matches;
            return matchState;
        case 'FETCHING_MATCHES':
            const fetchingState = _.cloneDeep(state);
            fetchingState.fetchingMatches = action.loading;
            return fetchingState;
        default:
            return state;
    }
}