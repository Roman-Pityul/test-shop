const Property = require('../models/Property')

class PropertyController {
    async addProperty(req, res) {
        try {
            const { name, value } = req.body
            const prop = new Property({ name, value })
            await prop.save()
            res.status(201).json(prop)
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так...", error: e.message })
        }
    }

    async remooveProperty(req, res) {
        try {
            await Property.findByIdAndRemove(req.params.id)
            res.status(200).json({message: "Свойство удалено"})
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так...", error: e.message })
        }
    }

    async getAllProperty(req, res) {
        try {
            const { limit, skip } = req.query
            const prop = await Property.find().limit(Number(limit)).skip(Number(skip))
            res.status(200).json(prop)
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так...", error: e.message })
        }
    }
}

module.exports = new PropertyController()