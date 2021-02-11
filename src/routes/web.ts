import express, {Router} from "express";
import CourseController from "../app/controllers/Backend/CourseController";

const Route: Router = express.Router();

Route.get('/courses',CourseController.index);


export default Route;