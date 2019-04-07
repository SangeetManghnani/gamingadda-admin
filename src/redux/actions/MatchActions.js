import getMatchesFromDb from 'utils/firebase/read';


export function setMatches(matches) {
    return {
        type: 'FETCHED_ALL_MATCHES_SUCCESS',
        matches,
    }
}

export function setLoadingMatches(loading) {
    return {
        type: 'FETCHING_MATCHES',
        loading
    }
}

// export function matchesFetchedSuccessfully(attributes = []) {
//     return {
//         type: ActionTypes.FETCHED_ALL_MATCHES_SUCCESS,
//         attributes,
//     };
// }

// export function errorInFetchingMatches(hasErrored, errorDetails) {
//     return {
//         type: ActionTypes.FETCHING_ALL_MATCHES_ERROR,
//         hasErrored,
//         errorDetails,
//     };
// }

// export function fetchingMatches(isFetching) {
//     return {
//         type: ActionTypes.FETCHING_ALL_MATCHES,
//         isFetching,
//     };
// }


// export function fetchAllMatches() {
//     return (dispatch) => {
//         dispatch(fetchingAllAttributes(true));

//     }
// }