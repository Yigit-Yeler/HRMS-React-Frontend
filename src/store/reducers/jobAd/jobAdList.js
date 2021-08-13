import { GET_JOBADS_ERROR, GET_JOBADS_START, GET_JOBADS_SUCCESS } from "../../types/jobAdTypes"

const INITIAL_STATE = {
    isLoading: true,
    jobAds: [],
    message: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_JOBADS_START:
            return { ...state, isLoading: true, message: '' }
        case GET_JOBADS_SUCCESS:
            return { ...state, isLoading: false, jobAds: action.payload }
        case GET_JOBADS_ERROR:
            return { ...state, isLoading: false, message: action.payload }
        default:
            return state;
    }
}

export default reducer;