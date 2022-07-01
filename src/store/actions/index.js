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

export const onSubmitSearchButton = (today) => {
    return {
        type: 'ON_SUBMIT',
        payload: today
    }
}

export const onClick3days = (days3) => {
    return {
        type: 'ON_CLICK_DAYS_3',
        payload: days3
    }
}