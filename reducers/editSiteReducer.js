const SET_SITE = 'SET_SITE';

export const setSite = (site) => {
    return {
        type: SET_SITE,
        site
    }
}

export default (state = {}, action) => {
    switch(action.type) {
        case SET_SITE:
            return action.site;
            break;
    }

    return state;
}