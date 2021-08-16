import { GET_COMPANY_START, GET_COMPANY_SUCCESS, GET_COMPANY_ERROR } from "../../types/companyTypes"

const INITIAL_STATE = {
    isLoading: true,
    companies: [],
    message: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_COMPANY_START:
            return { ...state, isLoading: true, message: '' }
        case GET_COMPANY_SUCCESS:
            return { ...state, isLoading: false, companies: action.payload }
        case GET_COMPANY_ERROR:
            return { ...state, isLoading: false, message: action.payload }
        default:
            return state;
    }
}

export default reducer;