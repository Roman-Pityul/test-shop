const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const { validateMiddleware } = require('../middleware/validateMiddleware')

router.post('/registration', validateMiddleware, userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', userController.getUsers)

module.exports = router
