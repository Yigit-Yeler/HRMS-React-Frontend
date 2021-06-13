import axios from 'axios'

export default class JobAdService {
    getJobAds() {
        return axios.get("http://localhost:8080/api/jobads/getAll")
    }

    getJobAdById(id) {
        return axios.get("http://localhost:8080/api/jobads/getById?id=" + id)
    }

    addJobAd(cityId, companyName, count, description, lastDate, maxSalary, minSalary, positionId) {
        return axios.post("http://localhost:8080/api/jobads/add",
            {
                "active": true,
                "city": {
                    "id": cityId,
                },
                "companyName": companyName,
                "count": count,
                "description": description,
                "lastDate": lastDate,
                "maxSalary": maxSalary,
                "minSalary": minSalary,
                "position": {
                    "id": positionId,
                }
            }
        )
    }
}