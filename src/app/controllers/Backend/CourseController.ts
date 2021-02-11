import {Request,Response} from "express";

class CourseController {
    public index(request: Request, response: Response): void
    {
        response.json("hello");
    }
}

export default new CourseController();