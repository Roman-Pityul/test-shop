const Car = require('../models/Car')


class CarController {
    async addCar(req, res) {
        try {
            const { name, image, price, description, property } = req.body
            const car = new Car({ name, image, price, description, property })
            await car.save()
            res.status(201).json(car)
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так...", error: e.message })
        }
    }

    async updateCar(req, res) {
        try {
            const { name, image, price, description, property } = req.body
            const car = new Car({ name, image, price, description, property })
            await car. ////////
            res.status(201).json(car)
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так...", error: e.message })
        }
    }

    async remooveCar(req, res) {
        try {
            await Car.findByIdAndRemove(req.params.id)
            res.status(200).json({message: "Товар удален"})
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так...", error: e.message })
        }
    }

    async getOneCar(req, res) {
        try {
            const car = await Car.findById(req.params.id)
            res.status(200).json(car)
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так...", error: e.message })
        }
    }

    async getAllCar(req, res) {
        try {
            const { limit, skip } = req.query
            const cars = await Car.find().limit(Number(limit)).skip(Number(skip))
            res.status(200).json(cars)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

module.exports = new CarController()