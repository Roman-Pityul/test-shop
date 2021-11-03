const Router = require('express')
const router = new Router()
const userRouter = require('../routes/userRouter')
const carRouter = require('../routes/carRouter')
const propertyRouter = require('../routes/propertyRouter')

router.use('/user', userRouter)
router.use('/car', carRouter)
router.use('/property', propertyRouter)

module.exports = router