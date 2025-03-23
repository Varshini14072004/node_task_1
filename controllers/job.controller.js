const Job = require('../models/job');
//Post 
const createJob = async (req,res) => {
    try {
        const newjob = await Job.create(req.body);
        res.status(200).json(newjob);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};
//Retrive all data
const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};
//Retrieve specific job
const getJob = async (req, res) => {
    try {
        const {id} = req.params;
        const job = await Job.findById(id);
        res.status(200).json(job);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};
//Modify the value
const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Find the job and update it
        const job = await Job.findByIdAndUpdate(id, req.body, { new: true });

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        res.status(200).json(job);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//Delete the job
const deleteJob= async (req, res) => {
    try {
        const {id}=req.params;
        const job = await Job.findByIdAndDelete(id);
        if (!job){
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json({ message: "Job deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports={
    createJob,
    getAllJobs,
    getJob,
    updateJob,
    deleteJob
}

