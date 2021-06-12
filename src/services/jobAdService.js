import axios from 'axios'

export default class JobAdService {
    getJobAds() {
        return axios.get("http://localhost:8080/api/jobads/getAll")
    }

    getJobAdById(id) {
        return axios.get("http://localhost:8080/api/jobads/getById?id=" + id)
    }
}