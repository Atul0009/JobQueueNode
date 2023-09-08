import express from "express";
import jobController from "../controller/jobController.js";

const Router = express.Router();


Router.post("/submit-job",jobController.submitJob);
Router.get("/jobs",jobController.getJob);


export default Router;