import { GET_JOBAD_ERROR, GET_JOBAD_START, GET_JOBAD_SUCCESS } from "../../types/jobAdTypes"

const INITIAL_STATE = {
    isLoading: true,
    jobAd: {},
    message: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_JOBAD_START:
            return { ...state, isLoading: true, message: '' }
        case GET_JOBAD_SUCCESS:
            return { ...state, isLoading: false, jobAd: action.payload }
        case GET_JOBAD_ERROR:
            return { ...state, isLoading: false, message: action.payload }
        default:
            return state;
    }
}

export default reducer;