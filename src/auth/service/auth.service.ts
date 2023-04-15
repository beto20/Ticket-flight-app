import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/service/user.service';
import { LoginDto } from '../model/dto/login.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async signIn(signInDto: LoginDto): Promise<any> {
        const user = await this.userService.findUser(signInDto.username);

        if(user?.password !== signInDto.password) throw new UnauthorizedException();

        const payload = { 
            username: user.username, 
            sub: user.userId, 
            roles: user.roles 
        };

        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
