const SET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';

export const setSearchResults = (resultsArray) => {
    return {
        type: SET_SEARCH_RESULTS,
        results: resultsArray
    }
}

export default (state = [], action) => {
    switch(action.type) {
        case SET_SEARCH_RESULTS:
            return action.results;
            break;
    }

    return state;
}