import {Request, Response} from 'express'
import CreateCoursesService from './CreateCoursesService';


export function createCourse(req: Request, res: Response) {
    CreateCoursesService.execute({
        name: "Nodejs",
        duration: 10,
        educator: "Dani"
    });

    CreateCoursesService.execute({
        name: "ReactJS",
        educator: "Diego"
    });

    return res.send();
}