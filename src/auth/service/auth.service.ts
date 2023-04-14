import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);

        if(user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { username: user.username, sub: user.userId, roles: user.roles };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }

}
