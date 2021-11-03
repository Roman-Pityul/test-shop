import axios from 'axios'

export const carsApi = {
    async getAllCar() {
        const data = await axios.get('http://localhost:5000/api/car/')
        return data.data
    },

    async addCar(car) {
        const data = await axios.post('http://localhost:5000/api/car/add', car)
        return data.data
    },

    async getOneCar(carId) {
        const data = await axios.get(`http://localhost:5000/api/car/${carId}`)
        return data.data
    },

    async deleteCar(carId) {
        await axios.get(`http://localhost:5000/api/car/remoove/${carId}`)
    }
}
