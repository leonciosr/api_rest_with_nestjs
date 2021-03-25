import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    private users: Array<User> = [{ 
        id: 1,
        username: 'gabriel',
        email: 'gabriel.leite@alura.com.br',
        password: '123456',
        fullName: 'Gabriel Leite',
        beginAt: new Date()
    }];
    
    public create(user: User): User {
        this.users.push(user);
        return user;
    }

    public findByUserName(username: string): User {
        return this.users.find(user => user.username == username);
    }
}