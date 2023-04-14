import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {

    private readonly users = [
        {
            userId: 1,
            username: 'alberto',
            password: '1234',
            roles: 'admin',
        },
        {
            userId: 2,
            username: 'mock',
            password: '123',
            roles: 'admin',

        }
    ]

    async findOne(username: String): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}
