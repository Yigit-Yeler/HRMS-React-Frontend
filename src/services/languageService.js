import axios from 'axios'

export default class LanguageService {
    getLanguages() {
        return axios.get("http://localhost:8080/api/languages/getAll")
    }

    addLanguage(languageLevel, languageName, portfolioId) {
        return axios.post("http://localhost:8080/api/languages/add",
            {
                languageLevel: languageLevel,
                languageName: languageName,
                portfolioId: portfolioId
            }
        )
    }
}