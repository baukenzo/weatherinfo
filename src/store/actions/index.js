export const typingInSearch = (value) => {
    return {
        type: 'TYPING_IN_SEARCH',
        payload: value
    }
}

export const searchedCitiesList = (cities) => {
    return {
        type: 'SEARCHED_CITIES_LIST',
        payload: cities
    }
}