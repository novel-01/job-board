// Import required modules.
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create the Schema for job post
const jobAppliedSchema = new Schema({
    jobApplied: {
        type: String
    },
    jobAppliedBy: {
        type: String
    },
    applied_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date
    }
});

// we need to create a model for using schema
const jobApplied = mongoose.model('jobApplied', jobAppliedSchema);

// make this available to our jobs in our Node applications
module.exports = jobApplied;