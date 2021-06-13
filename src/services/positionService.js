import axios from 'axios'

export default class PositionService {
    getPositions() {
        return axios.get("http://localhost:8080/api/positions/getall")
    }

    addPosition(positionName) {
        return axios.post("http://localhost:8080/api/positions/add",
            {
                positionName: positionName
            }
        )
    }
}