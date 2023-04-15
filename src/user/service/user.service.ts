import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../model/entity/user.entity';
import { Repository } from 'typeorm';

export type User = any;

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
    ) {}

    async findUser(username: string): Promise<User | undefined> {
        const userFound = await this.userRepository.findOneBy({
            username: username
        });

        if(userFound === null) return {"message":"User Not Found (404)"};

        return userFound;
    }
}
