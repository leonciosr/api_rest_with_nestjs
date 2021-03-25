import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { UserNameUniqueDecorator } from '../decorators/decorators';

export class User {
    id: number;

    @Expose({
        name: 'username'
    })
    @UserNameUniqueDecorator({
        message: 'username needs to be unique.'
    })
    @IsNotEmpty({
        message: 'username is mandatory'
    })
    @IsString({
        message: 'username needs to be a string.'
    })
    username: string;

    @Expose({
        name: 'email'
    })
    @IsEmail({}, {
        message: 'email needs to be a email valid.'
    })
    email: string;

    @Expose({
        name: 'password'
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'senha is mandatory'
    })
    password: string;

    @Expose({
        name: 'fullName'
    })
    @IsNotEmpty({
        message: 'fullName is mandatory'
    })
    fullName: string;

    @Expose({
        name: 'joinDate'
    })
    beginAt: Date;
}