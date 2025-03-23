const express = require("express");
const router = express.Router();
const {createJob,getAllJobs,getJob,updateJob,deleteJob}=require("../controllers/job.controller");

router.post('/', createJob);
router.get('/', getAllJobs);
router.get('/:id', getJob);
router.put('/:id', updateJob);
router.delete('/:id',deleteJob);

module.exports = router;
