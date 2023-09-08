import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  name: String,
  complexity: String,
  status: {
    type: String,
    enum: ['queued', 'completed', 'failed'],
    default: 'queued',
  },
});

const Job = mongoose.model('Job', jobSchema);
export default Job;


