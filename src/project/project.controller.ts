import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserRoles, UseRoles, ACGuard } from 'nest-access-control';
import { ProjectService } from './project.service';
import { AuthJWTGuard } from 'src/shared/authJWT.guard';
import { AuthzGuard } from 'src/shared/authz.guard';

@Controller('api/project')
export class ProjectController {

    constructor (private projectService: ProjectService) {
    }


    @UseGuards(new AuthJWTGuard(), new AuthzGuard(),ACGuard)
    @UseRoles({
        resource: 'project',
        action: 'read',
        possession: 'any',
    })
    @Get()
    @UseGuards(new AuthJWTGuard())
    showAll (){
        return this.projectService.allProjects();
    };

}
