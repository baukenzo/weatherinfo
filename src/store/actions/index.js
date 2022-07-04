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

export const onError = () => {
    return {
        type: 'ON_ERROR'
    }
}

export const cancelError = () => {
    return {
        type: 'CANCEL_ERROR'
    }
}

export const loadingTrue = () => {
    return {
        type: 'LOADING_TRUE'
    }
}
export const loadingFalse = () => {
    return {
        type: 'LOADING_FALSE'
    }
}

export const secondLoadingOn = () => {
    return {
        type: 'SECOND_LOADING_ON'
    }
}

export const secondLoadingOff = () => {
    return {
        type: 'SECOND_LOADING_OFF'
    }
}


