import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './util/constants.util';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './util/auth.guard';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService, 
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
  imports: [
    UserModule, 
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1200s' },
    }),
  ],
  exports: [AuthService]
})
export class AuthModule {}
