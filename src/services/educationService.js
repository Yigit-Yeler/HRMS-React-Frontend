import axios from 'axios'

export default class EducationService {
    getEducations() {
        return axios.get("http://localhost:8080/api/educations/getAll")
    }

    addEducation(departmentName, educationDate, entryDate, portfolioId, schoolName) {
        return axios.post("http://localhost:8080/api/educations/add",
            {
                departmentName: departmentName,
                educationDate: educationDate,
                entryDate: entryDate,
                portfolioId: portfolioId,
                schoolName: schoolName
            }
        )
    }
}