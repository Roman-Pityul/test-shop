const Router = require('express')
const router = new Router()
const propertyController = require('../controllers/propertyController')


router.get('/', propertyController.getAllProperty)
router.post('/', propertyController.addProperty)
router.get('/remoove/:id', propertyController.remooveProperty)


module.exports = router