import axios from 'axios'

export default class PortfolioService {
    getPortfolios() {
        return axios.get("http://localhost:8080/api/portfolios/getAll")
    }

    addPortfolio(educationId, experienceId, imgUrl, intro, jobSeekerId, languageId, skillId) {
        return axios.post("http://localhost:8080/api/portfolios/add",
            {
                educations: [
                    {
                        id: educationId,
                    }
                ],
                experiences: [
                    {
                        id: experienceId,
                    }
                ],
                imgUrl: imgUrl,
                intro: intro,
                jobSeekerId: jobSeekerId,
                languages: [
                    {
                        id: languageId,
                    }
                ],
                skills: [
                    {
                        id: skillId,
                    }
                ]
            }
        )
    }
}