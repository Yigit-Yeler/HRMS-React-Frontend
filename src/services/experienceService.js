import axios from 'axios'

export default class ExperienceService {
    getExperiences() {
        return axios.get("http://localhost:8080/api/experiences/getAll")
    }

    addExperience(entryDate, portfolioId, positionName, quitDate, workPlaceName) {
        return axios.post("http://localhost:8080/api/experiences/add",
            {
                entryDate: entryDate,
                portfolioId: portfolioId,
                position: {
                    positionName: positionName
                },
                quitDate: quitDate,
                workPlaceName: workPlaceName
            }
        )
    }
}