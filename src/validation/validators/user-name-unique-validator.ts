import { Injectable } from "@nestjs/common";
import { UserService } from "../../user/user.service";
import { UserNameUniqueValidator } from "../protocols/protocols";

@Injectable()
export class UserNameUniqueValidatorAdapter implements UserNameUniqueValidator{

  constructor(private userService: UserService) {}

  isUnique(username: string){
    const isValid = this.userService.findByUserName(username); 
    if (!isValid) {
      // return new UserNameUniqueError(username);
      return false;
    }
    return true;
  }
}