import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {

    private usersList = [
        {id: 1, username: 'alex', password: 'password'},
        {id: 2, username: 'monica', password: 'password'}
    ];

    private createToken(user) {
        const {id, username} = user;
        return jwt.sign ({
            id,
            username
        },
        'provisionalsecret',
        {expiresIn: '7d'});
    }

    async allUsers () {
        return await this.usersList;
    }

    async login (username: string, password: string) {
        const userIndex = this.usersList.findIndex (user => (user.username == username));

        if (userIndex > -1) {
            const user = this.usersList[userIndex];
            if (user.password == password) {
                const token = this.createToken(user);
                return {user, token};   
            } 
        } else {
            throw new HttpException ('Invalid Username or Password', HttpStatus.UNAUTHORIZED);
        }
       
    }

}
