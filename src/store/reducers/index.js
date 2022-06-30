const initialState = {
    query: '',
    citiesList: []
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
        default: return state
    }
}

export default reducer;