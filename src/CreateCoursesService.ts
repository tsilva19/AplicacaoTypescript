/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course{
    name: String;
    duration?: Number;
    educator: String;
}


class CreateCoursesService {

    execute({duration =8, educator, name}: Course){
        console.log(name, duration, educator)
    }
}

export default new  CreateCoursesService()