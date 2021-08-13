import JobAdService from "../../../services/jobAdService"
import { GET_JOBADS_ERROR, GET_JOBADS_START, GET_JOBADS_SUCCESS } from "../../types/jobAdTypes"

export const getJobAds = () => dispatch => {
    dispatch({ type: GET_JOBADS_START })

    let jobAdService = new JobAdService()
    jobAdService.getJobAds().then(result =>
        dispatch({ type: GET_JOBADS_SUCCESS, payload: result.data.data }))
        .catch(error => dispatch({ type: GET_JOBADS_ERROR, payload: error }))
}