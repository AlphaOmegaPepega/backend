const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
//const verifyJWT = require('../middleware/verifyJWT')

//router.use(verifyJWT)

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser)
    
 router.route('/:id')   
    .get(usersController.getUser)
    .delete(usersController.deleteUser)
 router.route('/token').get(usersController.cookieTest)
module.exports = router