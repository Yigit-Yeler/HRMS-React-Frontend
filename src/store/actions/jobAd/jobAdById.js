import JobAdService from "../../../services/jobAdService"
import { GET_JOBAD_ERROR, GET_JOBAD_START, GET_JOBAD_SUCCESS } from "../../types/jobAdTypes"

export const getJobAdById = (id) => dispatch => {
    dispatch({ type: GET_JOBAD_START })

    let jobAdService = new JobAdService()
    jobAdService.getJobAdById(id).then(result =>
        dispatch({ type: GET_JOBAD_SUCCESS, payload: result.data.data }))
        .catch(error => dispatch({ type: GET_JOBAD_ERROR, payload: error }))
}