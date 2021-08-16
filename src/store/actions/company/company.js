import CompanyService from "../../../services/companyService"
import { GET_COMPANY_START, GET_COMPANY_SUCCESS, GET_COMPANY_ERROR } from "../../types/companyTypes"

export const getCompanies = () => dispatch => {
    dispatch({ type: GET_COMPANY_START })

    let companyService = new CompanyService()
    companyService.getCompanies().then(result =>
        dispatch({ type: GET_COMPANY_SUCCESS, payload: result.data.data }))
        .catch(error => dispatch({ type: GET_COMPANY_ERROR, payload: error }))
}