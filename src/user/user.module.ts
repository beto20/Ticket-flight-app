import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './util/roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './model/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}