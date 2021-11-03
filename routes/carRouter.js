const Router = require('express')
const router = new Router()
const carController = require('../controllers/carController')

router.post('/add', carController.addCar)
router.get('/:id', carController.getOneCar)
router.get('/', carController.getAllCar)
router.get('/remoove/:id', carController.remooveCar)
router.post('/update/:id', carController.updateCar)

module.exports = router
