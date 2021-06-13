import axios from 'axios'

export default class JobSeekerService {
    getJobSeekers() {
        return axios.get("http://localhost:8080/api/jobseekers/getAll")
    }

    addJobSeeker(birthDate, name, nationalityIdentity, surName) {
        return axios.post("http://localhost:8080/api/jobseekers/add",
            {
                birthDate: birthDate,
                name: name,
                nationalityIdentity: nationalityIdentity,
                surName: surName,
            }
        )
    }
}