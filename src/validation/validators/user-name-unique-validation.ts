import { ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UserNameUniqueValidatorAdapter } from './user-name-unique-validator';

@Injectable()
@ValidatorConstraint()
export class UserNameUniqueValidationConstraint implements ValidatorConstraintInterface {

    constructor(private readonly userNameUniqueValidator: UserNameUniqueValidatorAdapter) {}

    validate(username: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return this.userNameUniqueValidator.isUnique(username);
    }
}
  