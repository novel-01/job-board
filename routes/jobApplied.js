//import the required modules
const express = require('express');
const router = express.Router();
const jobApplied = require('../controllers/jobAppliedController');

//api for create job
router.route('/job/applyJob').post(jobApplied.postJobApllied);

//api for getting the all jobs posted
// router.route('/job/getAllJob').get(jobController.getAllJob);

//api for getting the user data from his id
// router.route('/job/getJob/:id').get(jobController.getJob);

//api for updating the data of the user
// router.route('/job/updateJob/:jobId').put(jobController.updateJob);

//api for deleting the employee
// router.route('/job/deleteJob/:jobId').delete(jobController.deleteJob);

//export the router
module.exports = router;
