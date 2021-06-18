import axios from 'axios'

export default class JobTimeService {
    getJobTimes() {
        return axios.get("http://localhost:8080/api/jobTimes/getAll")
    }

    addJobTime(jobTimeName) {
        return axios.post("http://localhost:8080/api/jobTimes/add",
            {
                name: jobTimeName,
            }
        )
    }
}