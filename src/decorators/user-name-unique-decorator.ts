import { registerDecorator, ValidationOptions } from 'class-validator';
import { UserNameUniqueValidationConstraint } from '../validation/validators/user-name-unique-validation';

export function  UserNameUniqueDecorator(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UserNameUniqueValidationConstraint,
        });
    };
}