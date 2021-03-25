import { Module } from '@nestjs/common';
import { UserNameUniqueValidatorAdapter } from '..//validation/validators/user-name-unique-validator';
import { UserNameUniqueValidationConstraint } from '../validation/validators/user-name-unique-validation';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],
    providers: [
        UserService,
        UserNameUniqueValidatorAdapter,
        UserNameUniqueValidationConstraint,
    ]
})
export class UserModule { }