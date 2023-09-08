// worker.js
import Queue from "bull";
import Job from "../model/jobModel.js"

const queue = new Queue('job-queue', {
  redis: {
    host: 'localhost',
    port: 6379, // Default Redis port
  },
});

queue.process(async (job) => {
  try {
    
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
   
    // Update job status in MongoDB
    await Job.findByIdAndUpdate(job.data.jobId, { status: 'completed' });

  } catch (error) {
    console.error(`Job ${job.data.jobId} failed:`, error);
    
    await Job.findByIdAndUpdate(job.data.jobId, { status: 'failed' });
  }
});

export default queue;
