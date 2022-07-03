const initialState = {
    query: '',
    citiesList: [],
    today: [],
    days3: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TYPING_IN_SEARCH':
            return {
                ...state,
                query: action.payload
            }
        case 'SEARCHED_CITIES_LIST':
            return {
                ...state,
                citiesList: action.payload
            }
        case 'ON_SUBMIT':
            return {
                ...state,
                error: false,
                today: action.payload
            }
        case 'ON_CLICK_DAYS_3': 
            return {
                ...state,
                days3: action.payload
            }
        case 'ON_ERROR':
            return {
                ...state,
                error: true
            }
        default: return state
    }
}

export default reducer;