import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { SkipAuth } from '../util/auth.decorator';
import { AuthGuard } from '../util/auth.guard';
import { LoginDto } from '../model/dto/login.dto';

@Controller('api/v1/back/auths')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    @SkipAuth()
    signIn(@Body() signInDto: LoginDto) {
        return this.authService.signIn(signInDto);
    }
}
