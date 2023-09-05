//import the required modules
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//api for create user (employee/employer)
router.route('/createUser')
    .post(userController.postUser);

//api for getting the user data from his id
router.route('/getUser/:id')
    .get(userController.getUser);

//api for updating the data of the user
// router.route('/updateUser/:UserId')
//     .put(userController.updateUser);

//api for deleting the employee
// router.route('/deleteUser')
// .delete(userController.deleteUser);


//export the router
module.exports = router;
