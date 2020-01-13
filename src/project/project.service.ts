import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
    
    private projectsList = [
        {"id": 1, "name": "The first project","description": "This is the first project we created"},
        {"id": 2, "name": "The second project","description": "This is the second project we created"},
        {"id": 3, "name": "The third project","description": "This is the third project we created"},

    ]; 
    
    constructor () {}

    async allProjects () {
        return await this.projectsList;    
    }


}
