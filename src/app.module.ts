import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketModule } from './ticket/ticket.module';
import { TicketService } from './ticket/service/ticket.service';
import { TicketController } from './ticket/controller/ticket.controller';
import { AdminModule } from './admin/admin.module';
import { FlightController } from './admin/controller/flight.controller';
import { FlightService } from './admin/service/flight.service';


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
    })],
  controllers: [TicketController, FlightController],
  providers: [TicketService, FlightService],
})
export class AppModule {}
