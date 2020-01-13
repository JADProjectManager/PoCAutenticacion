import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { AuthJWTGuard } from 'src/shared/authJWT.guard';

@Controller('api/project')
export class ProjectController {

    constructor (private projectService: ProjectService) {
    }

    @Get()
    @UseGuards(new AuthJWTGuard())
    showAll (){
        return this.projectService.allProjects();
    };

}
