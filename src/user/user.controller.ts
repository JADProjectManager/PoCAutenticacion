import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserRoles, UseRoles, ACGuard } from 'nest-access-control';
import { UserService } from './user.service';
import { AuthJWTGuard } from 'src/shared/authJWT.guard';
import { AuthzGuard } from 'src/shared/authz.guard';

@Controller()
export class UserController {

    constructor(private userService: UserService) {

    }

    @Get('api/user')
    @UseGuards(new AuthJWTGuard(), new AuthzGuard(), ACGuard)
    @UseRoles({
        resource: 'user',
        action: 'read',
        possession: 'any',
    })
    async showUsers (){
        return await this.userService.allUsers();
    }

    @Post('login') 
    async login (@Body ('username') username: string, @Body ('password') password: string) {
        return this.userService.login(username, password);
    } 

}
