//import the required modules
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router
//api for create user (emplyee/employer)
.post(
    "/user/createUser", userController.postUser
)
//api for getting all user data
.get(
    '/user/getAllUser', userController.getAllUser
)
//api for getting all user data from his type(Employee/Employer)
.get(
    '/user/getAllUserType/:uType', userController.getAllUserType
)
//api for getting the user data from his id
.get(
    '/user/getUser/:id', userController.getUser
)
//api for updating the data of the user
.put(
    '/user/updateUser/:userId', userController.updateUser
)
//api for deleting the user
.delete(
    '/user/deleteUser/:userId', userController.deleteUser
)

//export the router
module.exports = router;