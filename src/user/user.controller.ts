import { Controller, Post, Body, Get, Param, HttpStatus, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) { }

    @Get(':username')
    public findByUserName(@Param('username') username: string): User {
        const userFinded = this.userService.findByUserName(username);

        if (!userFinded) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'User not found.'
            });
        }
        return userFinded;
    }

    @Post()
    public create(@Body() user: User): NestResponse {
        const userCreated = this.userService.create(user);
        return new NestResponseBuilder()
            .status(HttpStatus.CREATED)
            .headers({
                'Location': `/users/${userCreated.username}`
            })
            .body(userCreated)
            .build();
    }
}