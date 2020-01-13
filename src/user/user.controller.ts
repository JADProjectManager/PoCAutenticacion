import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthJWTGuard } from 'src/shared/authJWT.guard';

@Controller()
export class UserController {

    constructor(private userService: UserService) {

    }

    @Get('api/user')
    @UseGuards(new AuthJWTGuard())
    async showUsers (){
        return await this.userService.allUsers();
    }

    @Post('login') 
    async login (@Body ('username') username: string, @Body ('password') password: string) {
        return this.userService.login(username, password);
    } 

}
