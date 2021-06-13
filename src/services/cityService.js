import axios from 'axios'

export default class CityService {
    getCities() {
        return axios.get("http://localhost:8080/api/cities/getAll")
    }

    addCity(cityName, plateNumber) {
        return axios.post("http://localhost:8080/api/cities/add",
            {
                cityName: cityName,
                plateNumber: plateNumber
            }
        )
    }
}