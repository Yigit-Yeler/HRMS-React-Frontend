import axios from 'axios'

export default class EmployerService {
    getEmployers() {
        return axios.get("http://localhost:8080/api/employers/getAll")
    }

    addEmployer(companyName, phoneNumber, webSiteUrl) {
        return axios.post("http://localhost:8080/api/employers/add",
            {
                companyName: companyName,
                phoneNumber: phoneNumber,
                webSiteUrl: webSiteUrl
            }
        )
    }
}