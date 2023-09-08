import Job from "../model/jobModel.js";
import queue from "../queue/job.js"


export default{

async submitJob(req,res){
    try{

        const { name, complexity } = req.body;

        const job = await Job.create({ name, complexity });
        await queue.add({ jobId: job._id });
    
        return res.status(201).json({ message: 'Job submitted successfully' });

    }catch(err){
        return res.status(400).send(err)
    }
},

async getJob(req,res){
    try{

       const jobs = await Job.find();
       return res.status(200).send(jobs)

    }catch(err){
        return res.status(400).send(err)
    }
}

}