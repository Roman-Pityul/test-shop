const User = require('../models/User')
const bcrypt = require('bcrypt')
const config = require('config')
const jwt = require('jsonwebtoken')

class UserController {
    async registration(req, res, next) {
        try {
            const { email, password } = req.body
            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: "Такой пользователь уже существует" })
            }
            const hashPass = await bcrypt.hash(password, 12)
            const user = new User({ email: email, password: hashPass })
            await user.save()
            res.status(200).json({ message: "Пользователь создан" })
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ message: "Не корректные данные авторизации" })
            }
            const checkPass = await bcrypt.compare(password, user.password)
            if (!checkPass) {
                return res.status(400).json({ message: "Не корректные данные авторизации" })
            }
            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )
            res.json({ token, userId: user.id })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async activate(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(['123', '456'])
        } catch (e) {

        }
    }
}

module.exports = new UserController()

//https://youtu.be/fN25fMQZ2v0?t=1227