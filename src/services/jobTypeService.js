import axios from 'axios'

export default class JobTypeService {
    getJobTypes() {
        return axios.get("http://localhost:8080/api/jobTypes/getAll")
    }

    addJobType(jobTypeName) {
        return axios.post("http://localhost:8080/api/jobTypes/add",
            {
                name: jobTypeName,
            }
        )
    }
}