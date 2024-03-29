import { Module } from '@nestjs/common';
import { TicketModule } from './ticket/ticket.module';
import { TicketService } from './ticket/service/ticket.service';
import { TicketController } from './ticket/controller/ticket.controller';
import { AdminModule } from './admin/admin.module';
import { FlightController } from './admin/controller/flight.controller';
import { FlightService } from './admin/service/flight.service';
import { CountryModule } from './country/country.module';
import { OfferModule } from './offer/offer.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from './cache/redis.module';


@Module({
  imports: [TicketModule, AdminModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true
    }),
    CountryModule,
    OfferModule,
    AuthModule,
    UserModule,
    RedisModule
  ],
  controllers: [TicketController, FlightController],
  providers: [TicketService, FlightService, UserService],
})
export class AppModule {}
