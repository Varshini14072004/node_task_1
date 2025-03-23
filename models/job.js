const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema(
    {
        jobId: { 
            type: Number, 
            required: [true, "Job ID is required"], 
            unique: true, 
            default: 0 
        },
        companyName: { 
            type: String, 
            required: [true, "Company name is required"], 
            trim: true 
        },
        jobTitle: { 
            type: String, 
            required: [true, "Job title is required"], 
            trim: true 
        },
        applicationDate: { 
            type: Date, 
            required: [true, "Application date is required"], 
            default: Date.now 
        },
        status: { 
            type: String, 
            enum: ["Applied", "Interviewing", "Rejected", "Accepted"], 
            required: [true, "Application status is required"], 
            default: "Applied" 
        },
        notes: { 
            type: String, 
            trim: true 
        }
    },
    {
        timestamps: true
    }
)
const Job = mongoose.model("job",jobSchema);
module.exports = Job;